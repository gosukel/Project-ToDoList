import filterNotes from "./filterNotes";
import handleDates from "./handleDates";
import makeNotes from "./makeNotes";
import handleLocalStorage from "./handleLocalStoage";

export default function addNote(notes, modalId) {
    const dlg = document.querySelector(modalId);
    // all inputs
    const titleInput = document.querySelector("input#title");
    const groupInput = document.querySelector("select#list-group");
    const descriptionInput = document.querySelector("textarea#description");
    const dueDateInput = document.querySelector("input#due-date");
    const priorityInput = document.querySelector("select#priority");
    // get date objs
    let makeDate = handleDates("today", "make");
    let dueDate = handleDates(dueDateInput.value, "due");
    // create note obj
    let newNote = {
        created: makeDate,
        id: notes.length + 1,
        title: titleInput.value,
        priority: priorityInput.value,
        description: descriptionInput.value,
        due: dueDate,
        completed: false,
        group: groupInput.value.toLowerCase(),
    };
    notes.push(newNote);

    handleLocalStorage("update", notes, false);
    makeNotes(filterNotes(notes, "all", false, false));
    dlg.close();
}
