let STUDENTS = {};
async function loadStudents() {
    try {
        const response = await fetch(
            `${CONFIG.API_URL}?action=students&v=${CONFIG.API_VERSION}`
        );
        STUDENTS = await response.json();
        console.log("Jumlah Murid :", Object.keys(STUDENTS).length);
    } catch (err) {
        console.error("Gagal load murid", err);
    }
}
function getStudent(id) {
    return STUDENTS[id] || null;
} 
