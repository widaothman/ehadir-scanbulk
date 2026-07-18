const video = document.getElementById("video");

let scanner;
let isScanning = false;

function startScanner() {

    scanner = new QrScanner(

        video,

        result => {

            if (isScanning) return;

            isScanning = true;

            let qrData = result.data
                ? result.data.trim()
                : String(result).trim();

            console.log("QR :", qrData);

            document.getElementById("hasil").innerHTML =
                "✅ QR : " + qrData;

            // Lepaskan semula selepas 500ms
            setTimeout(() => {
                isScanning = false;
            }, 500);

        },

        {
            preferredCamera: "environment",
            highlightScanRegion: true,
            highlightCodeOutline: true
        }

    );

    scanner.start()
        .then(() => {
            console.log("Camera Ready");
        })
        .catch(err => {
            console.error(err);
        });

}

window.onload = startScanner;
