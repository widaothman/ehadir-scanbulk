let html5QrCode = null;

async function startScanner() {

    try {

        html5QrCode = new Html5Qrcode("reader");

        await html5QrCode.start(

            {
                facingMode: "environment"
            },

            {
                fps: CONFIG.FPS,
                qrbox: {
                    width: CONFIG.QRBOX,
                    height: CONFIG.QRBOX
                }
            },

            onScanSuccess,

            onScanFailure

        );

        console.log("✅ Camera Started");

    } catch (err) {

        console.error(err);

        alert("Tidak dapat membuka kamera.");

    }

}

function stopScanner() {

    if (html5QrCode) {

        html5QrCode.stop();

    }

}

function onScanSuccess(decodedText, decodedResult) {

    console.log("QR:", decodedText);

}

function onScanFailure(error) {

    // Biarkan kosong dahulu

}

window.addEventListener("load", () => {

    startScanner();

});
