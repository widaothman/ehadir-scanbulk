const CONFIG = {

    // URL Apps Script (akan diisi kemudian)
   API_URL: "https://script.google.com/a/macros/moe-dl.edu.my/s/AKfycbxSmy6OwY7Ydqt6bVdRlab_HbpDDlmXIZgH2RPlak79nvMLhn_a63T_XUZdzY5bSx0MNg/exec",
    API_VERSION: "1.0",
        
    // Bilangan maksimum rekod dihantar sekali
    MAX_BATCH: 20,

    // Hantar queue setiap 1 saat
    SEND_INTERVAL: 1000,

    // Retry jika gagal
    RETRY_INTERVAL: 3000,

    // Kamera belakang
    CAMERA_FACING: "environment",

    // FPS scanner 15/20
    FPS: 15,

    // Saiz kotak QR
    QRBOX: 250

};
