let STUDENTS = {};
async function loadStudents() {
    try {
        const response = await fetch(
            ${CONFIG.API_URL}?action=students&v=${CONFIG.API_VERSION}
        );
        if (!response.ok) {
            alert("HTTP Error: " + response.status + " " + response.statusText);
        }
        const text = await response.text();
        try {
            STUDENTS = JSON.parse(text);
        } catch (parseErr) {
            alert("Bukan JSON! Response:\n\n" + text.substring(0, 300));
            return;
        }
        console.log("Jumlah Murid :", Object.keys(STUDENTS).length);
    } catch (err) {
        alert("Fetch gagal: " + err.message);
    }
}
function getStudent(id) {
    return STUDENTS[id] || null;
}
