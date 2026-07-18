let bil = 1;

function processScan(id){

    const tbody = document.getElementById("scanTable");

    const row = tbody.insertRow();

    row.insertCell().innerHTML = bil++;
    row.insertCell().innerHTML = id;
    row.insertCell().innerHTML = "-";
    row.insertCell().innerHTML = "-";
    row.insertCell().innerHTML = "Waiting";
    row.insertCell().innerHTML =
        new Date().toLocaleTimeString();

    document.getElementById("total").innerHTML = bil - 1;

}
