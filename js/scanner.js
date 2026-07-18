<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>e-Hadir QR Scanner</title>

<style>

body{
  font-family:Arial,sans-serif;
  text-align:center;
  padding:20px;
}

video{
  width:100%;
  max-width:500px;
  border-radius:12px;
}

#hasil{
  margin-top:20px;
  font-size:24px;
  font-weight:bold;
  color:green;
}

button{
  width:100%;
  max-width:500px;
  padding:15px;
  font-size:18px;
  border:none;
  border-radius:10px;
  margin-top:15px;
  background:#2DC87A;
  color:white;
}

</style>

<script src="https://unpkg.com/qr-scanner/qr-scanner.umd.min.js"></script>

</head>
<body>

<h2>📷 e-Hadir QR Scanner</h2>

<video
  id="video"
  playsinline
  autoplay
  muted
  style="width:100%;max-width:500px;">
</video>

<div id="hasil">
Sedia untuk scan...
</div>

<button id="btnSahkan" style="display:none;">
✓ GUNA ID INI
</button>

<script>

const video = document.getElementById("video");
const hasil = document.getElementById("hasil");
const btn = document.getElementById("btnSahkan");

let currentID = "";
let lastScan = "";

const scanner = new QrScanner(
  video,
  result => {

    console.log(result);

    let qrData = result.data
  ? result.data.trim()
  : String(result).trim();

if (qrData.includes("id=")) {

  const url = new URL(qrData);

  currentID = url.searchParams.get("id");

} else {

  currentID = qrData;

}

   hasil.innerHTML =
  "✅ QR Dikesan: " + currentID;


    if (lastScan === currentID) return;

lastScan = currentID;

setTimeout(() => {
    lastScan = "";
}, 1000);
    
    
    // Panggil fungsi bulk
processScan(currentID);

// Jangan berhenti kamera

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

  hasil.innerHTML =
    "✅ Kamera aktif. Halakan kepada QR";

})
.catch(err => {

  hasil.innerHTML =
    "❌ " + err;

  console.error(err);

});


</script>

</body>
</html>
