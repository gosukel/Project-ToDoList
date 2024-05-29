import handleDates from "./handleDates";

export default function makeNote(note, completed) {
    let noteBoxDiv = document.createElement("div");
    noteBoxDiv.classList.add("note-box");
    noteBoxDiv.setAttribute("id", `note-id${note.id}`);

    let noteTopDiv = document.createElement("div");
    noteTopDiv.classList.add("note-top-div");
    noteBoxDiv.appendChild(noteTopDiv);

    let noteMakeDate = document.createElement("p");
    noteMakeDate.classList.add("make-date");
    let makeDate = handleDates(note.created, "read");
    noteMakeDate.textContent = makeDate;
    noteTopDiv.appendChild(noteMakeDate);

    let notePriority = document.createElement("p");
    if (completed === false) {
        notePriority.classList.add(
            "note-priority",
            `priority-${note.priority}`
        );
        notePriority.textContent = note.priority;
    } else if (completed === true) {
        notePriority.classList.add("note-priority", `priority-low`);
        notePriority.textContent = "completed";
    }

    noteTopDiv.appendChild(notePriority);

    let noteTitle = document.createElement("p");
    noteTitle.classList.add("note-title");
    noteTitle.textContent = note.title;
    noteTopDiv.appendChild(noteTitle);

    let noteDescDiv = document.createElement("div");
    noteDescDiv.classList.add("note-description-div");
    noteBoxDiv.appendChild(noteDescDiv);

    let noteDescription = document.createElement("p");
    noteDescription.classList.add("note-description");
    noteDescription.textContent = note.description;
    noteDescDiv.appendChild(noteDescription);

    let noteDueDate = document.createElement("p");
    noteDueDate.classList.add("due-date");
    let dueDate = handleDates(note.due, "read");
    noteDueDate.textContent = `Due ${dueDate}`;
    noteBoxDiv.appendChild(noteDueDate);

    let noteCheckboxDiv = document.createElement("div");
    noteCheckboxDiv.classList.add("note-checkbox");
    noteBoxDiv.appendChild(noteCheckboxDiv);

    // not completed
    if (completed === false) {
        let checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", "complete");
        checkboxLabel.textContent = "completed: ";
        noteCheckboxDiv.appendChild(checkboxLabel);

        let noteCheckbox = document.createElement("input");
        noteCheckbox.setAttribute("type", "checkbox");
        noteCheckbox.setAttribute("name", "complete");
        noteCheckbox.setAttribute("id", "complete");
        noteCheckboxDiv.appendChild(noteCheckbox);
    }
    return noteBoxDiv;
}
