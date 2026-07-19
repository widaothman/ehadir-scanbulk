const video = document.getElementById("video");
const hasil = document.getElementById("hasil");

let scanner;

function startScanner() {

    scanner = new QrScanner(

        video,

        result => {

            let qrData = result.data
                ? result.data.trim()
                : String(result).trim();

            // Jika QR mengandungi URL dengan parameter id=
            if (qrData.includes("id=")) {

                try {

                    const url = new URL(qrData);
                    qrData = url.searchParams.get("id");

                } catch (e) {
                    console.log(e);
                }

            }

           alert(
  "QR=[" + qrData + "]\n" +
  "Panjang=" + qrData.length
);

processScan(qrData);

            if (hasil) {
                hasil.innerHTML = "✅ QR : " + qrData;
            }

        },

        {
            preferredCamera: "environment",
            highlightScanRegion: true,
            highlightCodeOutline: true,
            returnDetailedScanResult: true
        }

    );

    scanner.start()
        .then(() => {

            console.log("✅ Camera Ready");

            if (hasil) {
                hasil.innerHTML = "✅ Kamera aktif. Halakan kepada QR";
            }

        })
        .catch(err => {

            console.error(err);

            if (hasil) {
                hasil.innerHTML = "❌ " + err;
            }

        });

}

window.onload = async function () {

    await loadStudents();

    startScanner();

};
