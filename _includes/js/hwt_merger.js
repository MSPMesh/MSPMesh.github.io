document.getElementById('mergeBtn').onclick = function () {
    document.getElementById('kmzInputMerge').click();
};

document.getElementById('kmzInputMerge').addEventListener('change', async function (event) {
    const files = Array.from(event.target.files);
    if (!files.length) return;


    function readFileAsync(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }


    function loadImageFromUint8Array(uint8arr) {
        return new Promise((resolve, reject) => {
            const blob = new Blob([uint8arr], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            const img = new Image();
            img.onload = () => {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.onerror = reject;
            img.src = url;
        });
    }


    const cloakpDict = {};
    const pattern = /^cloakp.*\.png$/i;

    for (const file of files) {
        if (!file.name.toLowerCase().endsWith('.kmz')) continue;
        const arrayBuffer = await readFileAsync(file);
        const zip = await JSZip.loadAsync(arrayBuffer);


        if (zip.file("DO_NOT_USE_AS_INPUT.flag")) continue;

        for (const name of Object.keys(zip.files)) {
            if (pattern.test(name.split('/').pop())) {
                const baseName = name.split('/').pop();
                const pngData = await zip.files[name].async('uint8array');
                if (!cloakpDict[baseName]) cloakpDict[baseName] = [];
                cloakpDict[baseName].push(pngData);
            }
        }
    }

    if (Object.keys(cloakpDict).length === 0) {
        alert("No cloakp*.png images found in selected KMZ files.");
        return;
    }


    async function generateOverlapImages(cloakpDict) {
        const resultImages = {};
        for (const [imgName, imgDatas] of Object.entries(cloakpDict)) {
            if (!imgDatas.length) continue;

            const imgs = await Promise.all(imgDatas.map(loadImageFromUint8Array));
            const width = imgs[0].width, height = imgs[0].height;

            const alphaArrays = imgs.map(img => {
                const canvas = document.createElement('canvas');
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const data = ctx.getImageData(0, 0, width, height).data;

                const alpha = [];
                for (let i = 3; i < data.length; i += 4) alpha.push(data[i]);
                return alpha;
            });


            const outCanvas = document.createElement('canvas');
            outCanvas.width = width; outCanvas.height = height;
            const outCtx = outCanvas.getContext('2d');
            const outImgData = outCtx.createImageData(width, height);
            const outData = outImgData.data;

            for (let y = 0; y < height; ++y) {
                for (let x = 0; x < width; ++x) {
                    const idx = y * width + x;
                    const opaqueCount = alphaArrays.reduce((acc, arr) => acc + (arr[idx] === 255 ? 1 : 0), 0);
                    let r = 0, g = 0, b = 0, a = 0;
                    if (opaqueCount === 1) { r = 255; a = 255; }
                    else if (opaqueCount === 2) { r = 255; g = 255; a = 255; }
                    else if (opaqueCount >= 3) { g = 255; a = 255; }

                    const px = idx * 4;
                    outData[px] = r; outData[px + 1] = g; outData[px + 2] = b; outData[px + 3] = a;
                }
            }
            outCtx.putImageData(outImgData, 0, 0);

            const blob = await new Promise(res => outCanvas.toBlob(res, 'image/png'));
            resultImages[imgName] = blob;
        }
        return resultImages;
    }


    function generateGroundOverlayXML(filename) {
        const match = filename.match(/^cloakp([NS])(\d+)([EW])(\d+)\.png$/i);
        if (!match) throw new Error(`Filename ${filename} does not match expected pattern.`);
        let [, latDir, lat, lonDir, lon] = match;
        lat = parseInt(lat, 10); lon = parseInt(lon, 10);
        let south = latDir.toUpperCase() === 'N' ? lat : -lat;
        let north = latDir.toUpperCase() === 'N' ? south + 1 : south - 1;
        let west = lonDir.toUpperCase() === 'W' ? -lon : lon;
        let east = lonDir.toUpperCase() === 'W' ? west + 1 : west - 1;
        return `<GroundOverlay>
  <name>${latDir}${lat}${lonDir}${String(lon).padStart(3, '0')}</name>
  <visibility>1</visibility>
  <drawOrder>0</drawOrder>
  <color>90ffffff</color>
  <Icon><href>${filename}</href></Icon>
  <LatLonBox>
    <south>${south}</south>
    <west>${west}</west>
    <north>${north}</north>
    <east>${east}</east>
    <rotation>0</rotation>
  </LatLonBox>
</GroundOverlay>`;
    }

    const xmlTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://earth.google.com/kml/2.1">

<Document id="CombinedMap">
  <name>CombinedMap</name>
  <visibility>1</visibility>
  <open>0</open>
  <LookAt><latitude>44.986656</latitude><longitude>-93.258133</longitude><range>10000</range><tilt>0</tilt><heading>0</heading></LookAt>  

!!!GROUND_OVERLAYS!!!

</Document>
</kml>
`;


    const overlapImages = await generateOverlapImages(cloakpDict);
    const overlayXMLs = Object.keys(overlapImages).map(generateGroundOverlayXML);
    const kmlOutput = xmlTemplate.replace("!!!GROUND_OVERLAYS!!!", overlayXMLs.join('\n'));


    const outZip = new JSZip();
    outZip.file("combined.kml", kmlOutput);
    for (const [imgName, blob] of Object.entries(overlapImages)) {
        outZip.file(imgName, blob);
    }
    outZip.file("DO_NOT_USE_AS_INPUT.flag", "This KMZ was generated as output and should not be used as input.");


    const kmzBlob = await outZip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(kmzBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "CombinedSanitized.kmz";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});