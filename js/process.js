let bil = 1;

function processScan(id) {
    if (isProcessing) return;

    const murid = getStudent(id);

    if (!murid) {
        isProcessing = true;
        showToast("❌ ID Murid tidak dijumpai: " + id, true);
        setTimeout(() => { isProcessing = false; }, 3000);
        return;
    }

    isProcessing = true;
    showToast("✅ " + id + " — " + murid.nama + " (" + murid.kelas + ")", false);
    setTimeout(() => { isProcessing = false; }, 3000);
);

    const tbody = document.getElementById("scanTable");

    const row = tbody.insertRow();

    row.dataset.id = id;

    row.insertCell().innerHTML = bil++;
    row.insertCell().innerHTML = id;
    row.insertCell().innerHTML = murid.nama;
    row.insertCell().innerHTML = murid.kelas;
    row.insertCell().innerHTML = "🟡 Sending...";
    row.insertCell().innerHTML =
        new Date().toLocaleTimeString();

    document.getElementById("total").innerHTML = bil - 1;

    // Masuk queue
    addQueue({

        id:id,
        nama:murid.nama,
        kelas:murid.kelas,
        row:row

    });

}
