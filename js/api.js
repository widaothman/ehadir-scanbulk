let STUDENTS = {};

async function loadStudents() {

    const url = `${CONFIG.API_URL}?action=students&t=${Date.now()}`;

    const response = await fetch(url);

    const text = await response.text();

    alert(text.substring(0,150));

    STUDENTS = JSON.parse(text);

}

function getStudent(id){

    id = String(id).trim().toUpperCase();

    return STUDENTS[id] || null;

}
