function updateCounter(){

    document.getElementById("total").innerText = queue.length;

    document.getElementById("queueCount").innerText = queue.length;

}

function renderTable(){

    const tbody=document.getElementById("scanTable");

    tbody.innerHTML="";

    queue.forEach((student,index)=>{

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
