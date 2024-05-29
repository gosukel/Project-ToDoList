import handleLocalStorage from "./handleLocalStoage";

export default function removeNote(noteId, notesList) {
    const noteDiv = document.querySelector(`#${noteId}`);
    console.log(noteDiv);
    for (let note of notesList) {
        if (`note-id${note.id}` === noteId) {
            note.completed = true;
        }
    }
    handleLocalStorage("update", notesList, false);
    noteDiv.parentNode.removeChild(noteDiv);
}
