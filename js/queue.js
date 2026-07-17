const scanQueue = [];

const scannedIds = new Set();

function isDuplicate(id){

    return scannedIds.has(id);

}

function addQueue(student){

    if(isDuplicate(student.id)){

        return false;

    }

    scannedIds.add(student.id);

    scanQueue.push(student);

    updateCounter();

    renderTable();

    return true;

}

function removeQueue(id){

    const index = scanQueue.findIndex(item => item.id === id);

    if(index >= 0){

        scanQueue.splice(index,1);

    }

}

function getQueue(){

    return scanQueue;

}
