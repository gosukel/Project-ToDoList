const tempGroupsList = ["Personal", "Business"];
const tempNotesList = [
    {
        created: new Date(),
        id: 1,
        title: "Go to the store",
        priority: "medium",
        description: "Need to get some bananas, milk, and cookies",
        due: new Date("2024-05-30"),
        completed: false,
        group: "personal",
    },
    {
        created: new Date(),
        id: 2,
        title: "Check mail",
        priority: "high",
        description: "make sure note missing any bills",
        due: new Date("2024-05-29"),
        completed: false,
        group: "personal",
    },
    {
        created: new Date(),
        id: 3,
        title: "Study",
        priority: "low",
        description: "Finish last part of section 7",
        due: new Date("2024-05-28"),
        completed: false,
        group: "business",
    },
];

export default function handleLocalStorage(
    mode,
    notes = false,
    groups = false
) {
    let notesList;
    let groupsList;
    if (mode === "startup") {
        if (!localStorage.getItem("groups")) {
            let pGroups = JSON.stringify(tempGroupsList);
            localStorage.setItem("groups", pGroups);
            groupsList = tempGroupsList;
        } else {
            groupsList = JSON.parse(localStorage.getItem("groups"));
        }
        if (!localStorage.getItem("notes")) {
            console.log(notes);
            let pNotes = JSON.stringify(tempNotesList);
            localStorage.setItem("notes", pNotes);
            notesList = tempNotesList;
        } else {
            notesList = JSON.parse(localStorage.getItem("notes"));
        }
    }
    if (mode === "parse") {
        if (notes.length) {
            groupsList = JSON.parse(localStorage.getItem("groups"));
        }
        if (notesList.length) {
            notesList = JSON.parse(localStorage.getItem("notes"));
        }
    }
    if (mode === "update") {
        if (!notes) {
            notesList = JSON.parse(localStorage.getItem("notes"));
        } else {
            localStorage.setItem("notes", JSON.stringify(notes));
        }
        if (!groups) {
            groupsList = JSON.parse(localStorage.getItem("groups"));
        } else {
            localStorage.setItem("groups", JSON.stringify(groups));
        }
    }
    return { groupsList: groupsList, notesList: notesList };
}
