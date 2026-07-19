let queue = [];

let sending = false;

function addQueue(data){

    queue.push(data);

    updateQueueCounter();

}

function updateQueueCounter(){

    document.getElementById("queueCount").innerHTML =
        queue.length;

}

async function processQueue(){

    if(sending) return;

    if(queue.length===0) return;

    sending=true;

    let item = queue[0];

    try{

        const response = await fetch(CONFIG.API_URL,{

            method:"POST",

            body:JSON.stringify({

                action:"bulkAttendance",

                id:item.id

            })

        });

        const result = await response.json();

        if(result.success){

            // Buang dari queue
            queue.shift();

            // Buang dari jadual
            item.row.remove();

            // Toast
            showToast(
                item.nama,
                item.kelas
            );

        }

    }catch(err){

        console.log(err);

    }

    sending=false;

    updateQueueCounter();

}

setInterval(

    processQueue,

    CONFIG.SEND_INTERVAL

);
