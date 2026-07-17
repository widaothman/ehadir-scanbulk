function updateCounter(){

    document.getElementById("total").innerText = scanQueue.length;

    document.getElementById("queueCount").innerText = scanQueue.length;

}

function renderTable(){

    const tbody=document.getElementById("scanTable");

    tbody.innerHTML="";

    scanQueue.forEach((student,index)=>{

        tbody.innerHTML +=`

<tr>

<td>${index+1}</td>

<td>${student.id}</td>

<td>${student.nama}</td>

<td>${student.kelas}</td>

<td>${student.status}</td>

<td>${student.masa}</td>

</tr>

`;

    });

}
