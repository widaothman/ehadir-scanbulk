let bil = 1;

function processScan(id){

    // Cari murid dalam RAM
    const murid = getStudent(id);

    // Jika ID tidak wujud
    if(!murid){

    alert(
      "ID = [" + id + "]\n\n" +
      "Jumlah Murid = " + Object.keys(STUDENTS).length + "\n\n" +
      "Key pertama = " + Object.keys(STUDENTS).slice(0,5).join(", ")
    );

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
