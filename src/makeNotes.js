import clearNotes from "./clearNotes";
import makeNote from "./makeNote";

export default function makeNotes(notes, completed = false) {
    clearNotes();
    const parent = document.querySelector("#main-notes-container");

    for (let note of notes) {
        let noteBoxDiv = makeNote(note, note.completed);
        parent.appendChild(noteBoxDiv);
    }
    return;
}
