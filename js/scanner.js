const video = document.getElementById("video");

let scanner;
let lastScan = "";

function startScanner() {

    scanner = new QrScanner(

        video,

        result => {

            let qrData = result.data
                ? result.data.trim()
                : String(result).trim();

            // Sokong QR lama dan QR baru
            if (qrData.includes("id=")) {

                const url = new URL(qrData);
                qrData = url.searchParams.get("id");

            }

            // Elak scan QR sama berulang kali
            if (lastScan === qrData) return;

            lastScan = qrData;

            console.log("SCAN :", qrData);

            processScan(qrData);

            setTimeout(() => {

                lastScan = "";

            },1000);

        },

        {

            preferredCamera:"environment",
            highlightScanRegion:true,
            highlightCodeOutline:true,
            returnDetailedScanResult:true

        }

    );

    scanner.start();

}

window.onload = startScanner;
