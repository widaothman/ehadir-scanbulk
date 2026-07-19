let STUDENTS = {};

async function loadStudents() {

    try {

        const response = await fetch(
            `${CONFIG.API_URL}?action=students&t=${Date.now()}`
        );

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        STUDENTS = await response.json();

        console.log("Jumlah Murid:", Object.keys(STUDENTS).length);

    } catch (err) {

        console.error("Gagal load murid:", err);

        STUDENTS = {};

        alert("❌ Gagal memuatkan senarai murid.\n\n" + err.message);

    }

}

function getStudent(id) {

    id = String(id).trim().toUpperCase();

    return STUDENTS[id] || null;

}
