let STUDENTS = {};

async function loadStudents() {

    alert("Load Students dipanggil");

    try {

        const response = await fetch(
            `${CONFIG.API_URL}?action=students`
        );

        alert("Response OK = " + response.ok);

        const text = await response.text();

        alert(text.substring(0,100));

        STUDENTS = JSON.parse(text);

        alert("Jumlah = " + Object.keys(STUDENTS).length);

    } catch(err) {

        alert("ERROR = " + err);

    }

}

function getStudent(id) {

    return STUDENTS[id] || null;

}
