let STUDENTS = {};

async function loadStudents() {

    try {

        const url = `${CONFIG.API_URL}?action=students&v=${Date.now()}`;

        alert(url);

        const response = await fetch(url);

        alert("Status = " + response.status);

        STUDENTS = await response.json();

        alert("Jumlah = " + Object.keys(STUDENTS).length);

    } catch (err) {

        alert(err);

    }

}
function getStudent(id) {

    return STUDENTS[id] || null;

}
