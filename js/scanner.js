const video = document.getElementById("video");

let scanner;

function startScanner(){

    scanner = new QrScanner(

        video,

        result => {

            let qrData = result.data
                ? result.data.trim()
                : String(result).trim();

            onScan(qrData);

        },

        {

            preferredCamera: "environment",

            highlightScanRegion: true,

            highlightCodeOutline: true,

            returnDetailedScanResult: true

        }

    );

    scanner.start()
        .then(()=>{

            console.log("Camera Ready");

        })
        .catch(err=>{

            console.error(err);

            alert(err);

        });

}

window.onload=function(){

    startScanner();

}
