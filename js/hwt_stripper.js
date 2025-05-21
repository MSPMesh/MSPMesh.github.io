document.getElementById('stripBtn').onclick = function () {
    document.getElementById('kmzInputStrip').click();
};

document.getElementById('kmzInputStrip').addEventListener('change', async function (event) {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    const spinner = document.getElementById('stripSpinner');
    if (spinner) spinner.style.display = '';

    try {
        function readFileAsync(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = e => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsArrayBuffer(file);
            });
        }

        // Generates a GroundOverlay XML for a given PNG filename
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

        // Minimal KML template, no identifying info
        const xmlTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://earth.google.com/kml/2.1">
<Document>
  <name>Sanitized Coverage</name>
  <visibility>1</visibility>
  <open>0</open>
!!!GROUND_OVERLAYS!!!
</Document>
</kml>
`;

        const pattern = /^cloakp.*\.png$/i;

        for (const file of files) {
            if (!file.name.toLowerCase().endsWith('.kmz')) continue;
            try {
                const arrayBuffer = await readFileAsync(file);
                const zip = await JSZip.loadAsync(arrayBuffer);

                // Only collect cloakp*.png files at any path
                const pngNames = Object.keys(zip.files).filter(name => pattern.test(name.split('/').pop()));
                if (pngNames.length === 0) {
                    console.warn(`No cloakp*.png images found in ${file.name}`);
                    continue;
                }

                // Only copy cloakp*.png files into output KMZ, flattening to root
                const outZip = new JSZip();
                const overlayXMLs = [];
                for (const name of pngNames) {
                    const baseName = name.split('/').pop();
                    const pngData = await zip.files[name].async('uint8array');
                    outZip.file(baseName, pngData);
                    overlayXMLs.push(generateGroundOverlayXML(baseName));
                }

                // Build sanitized KML
                const kmlOutput = xmlTemplate.replace("!!!GROUND_OVERLAYS!!!", overlayXMLs.join('\n'));
                outZip.file("sanitized.kml", kmlOutput);

                // Generate and download
                const kmzBlob = await outZip.generateAsync({ type: "blob" });
                const url = URL.createObjectURL(kmzBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name.replace(/\.kmz$/i, '_sanitized.kmz');
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (err) {
                console.error(`Error processing ${file.name}:`, err);
            }
        }
    } finally {
        if (spinner) spinner.style.display = 'none';
    }
});