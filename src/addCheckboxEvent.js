const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
import removeNote from "./removeNote";

export default function addCheckboxEvent(notesList, checkBoxes) {
    // console.log(checkBoxes);
    for (let checkbox of checkBoxes) {
        checkbox.addEventListener("click", (e) => {
            let noteId = e.target.parentNode.parentNode.id;
            console.log(noteId);
            removeNote(noteId, notesList);
        });
        // console.log("event added");
    }
}
