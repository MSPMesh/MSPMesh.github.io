document.getElementById('rankBtn').onclick = function () {
    document.getElementById('kmzInputRank').click();
};

document.getElementById('kmzInputRank').addEventListener('change', function (event) {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    const areaPerPixel = (1.5625 / 1000.0) / 2.0;
    const results = [];
    let processed = 0;

    const pattern = /^cloakp.*\.png$/i;

    files.forEach(file => {
        if (!file.name.toLowerCase().endsWith('.kmz')) {
            console.warn(`Skipping non-KMZ file: ${file.name}`);
            checkDone();
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            JSZip.loadAsync(e.target.result).then(async function (zip) {
                let totalOpaque = 0;
                const pngFiles = Object.keys(zip.files).filter(name => pattern.test(name.split('/').pop()));

                for (const pngName of pngFiles) {
                    const pngData = await zip.files[pngName].async('uint8array');
                    const blob = new Blob([pngData], { type: 'image/png' });
                    const url = URL.createObjectURL(blob);
                    const imgEl = new Image();
                    imgEl.src = url;

                    await new Promise((resolve, reject) => {
                        imgEl.onload = () => resolve();
                        imgEl.onerror = reject;
                    });

                    const canvas = document.createElement('canvas');
                    canvas.width = imgEl.width;
                    canvas.height = imgEl.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(imgEl, 0, 0);
                    const imageData = ctx.getImageData(0, 0, imgEl.width, imgEl.height).data;

                    let opaqueCount = 0;
                    for (let i = 3; i < imageData.length; i += 4) {
                        if (imageData[i] > 10) opaqueCount++;
                    }
                    totalOpaque += opaqueCount;
                    URL.revokeObjectURL(url);
                }
                const area = totalOpaque * areaPerPixel;
                results.push({ filename: file.name, pixels: totalOpaque, area });
                checkDone();
            }, function (err) {
                console.error('Error reading KMZ as zip:', err);
                checkDone();
            });
        };
        reader.readAsArrayBuffer(file);
    });

    function checkDone() {
        processed++;
        if (processed === files.length) {
            results.sort((a, b) => b.pixels - a.pixels);

            let csv = "file name,pixels,area\n";
            results.forEach(r => {
                csv += `${r.filename},${r.pixels},${r.area}\n`;
            });

            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'results.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }
});