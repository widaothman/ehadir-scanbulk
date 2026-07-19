let bil = 1;

function processScan(id) {

    // Pastikan format ID konsisten
    id = String(id).trim().toUpperCase();

    // Cari murid dalam RAM
    const murid = getStudent(id);

    // Jika ID tidak dijumpai
    if (!murid) {

        alert("❌ ID Murid tidak dijumpai : " + id);

        return;
    }

    // Elak scan ID yang sama berulang dalam queue
    const sudahAda = Array.from(document.querySelectorAll("#scanTable tr"))
        .some(row => row.dataset.id === id);

    if (sudahAda) {
        return;
    }

    const tbody = document.getElementById("scanTable");

    const row = tbody.insertRow();

    row.dataset.id = id;

    row.insertCell().innerHTML = bil++;
    row.insertCell().innerHTML = id;
    row.insertCell().innerHTML = murid.nama;
    row.insertCell().innerHTML = murid.kelas;
    row.insertCell().innerHTML = "🟡 Sending...";
    row.insertCell().innerHTML = new Date().toLocaleTimeString();

    document.getElementById("total").innerHTML = bil - 1;

    // Masukkan ke queue untuk dihantar ke Apps Script
    addQueue({

        id: id,
        nama: murid.nama,
        kelas: murid.kelas,
        row: row

    });

}
