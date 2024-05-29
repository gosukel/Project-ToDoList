// import css
import "./utils/css-reset.css";
import "./utils/temp-styles.css";
// import modules
import makeBottomSidebar from "./makeBottomSidebar.js";
import makeTopSidebar from "./makeTopSidebar.js";
import openModal from "./openModal.js";
import addGroup from "./addGroup.js";
import makeNotes from "./makeNotes.js";
import filterNotes from "./filterNotes.js";
import addCheckboxEvent from "./addCheckboxEvent.js";
import addNote from "./addNote.js";
import handleLocalStorage from "./handleLocalStoage.js";

let { notesList, groupsList } = handleLocalStorage("startup");
// console.log(notesList);
// console.log(groupsList);

// fill home page
makeTopSidebar();
makeBottomSidebar(groupsList);
makeNotes(notesList, false);
fixCheckboxes();
// DOM variables
const addNoteBtn = document.querySelector("#add-note-btn");
const submitNoteBtn = document.querySelector("#submit-note-btn");
const addGroupBtn = document.querySelector("#add-group-btn");
const submitGroupBtn = document.querySelector("#submit-group-btn");
const mainNotesBtn = document.querySelector("#main-notes-button");
const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
const bottomSidebarBtns = document.querySelectorAll(".group-item-btn");
const topSideBarBtns = document.querySelectorAll(".note-list-top-btn");

// CHECKBOX FUNCTIONALITY RESET
function fixCheckboxes() {
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    addCheckboxEvent(notesList, allCheckboxes);
}
// GROUP FILTER FUNCTIONALITY RESET
function fixGroupFilters() {
    const allGroupButtons = document.querySelectorAll(".group-item-btn");
    for (let btn of allGroupButtons) {
        btn.addEventListener("click", (e) => {
            makeNotes(filterNotes(notesList, btn.textContent, false, false));
        });
    }
}

//// FINISHED EVENT LISTENERS
// GROUP FILTER BUTTONS
for (let btn of bottomSidebarBtns) {
    btn.addEventListener("click", (e) => {
        makeNotes(filterNotes(notesList, btn.textContent, false, false));
    });
}
// + NOTE BUTTON
addNoteBtn.addEventListener("click", (e) => {
    let modalId = "#add-note-modal";
    openModal(groupsList, modalId);
});
// + GROUP BUTTON
addGroupBtn.addEventListener("click", () => {
    let modalId = "#add-group-modal";
    openModal(groupsList, modalId);
});
// SUBMIT GROUP BUTTON
submitGroupBtn.addEventListener("click", () => {
    let modalId = "#add-group-modal";
    addGroup(groupsList, makeBottomSidebar, modalId);
    fixGroupFilters();
});

// SUBMIT NOTE BUTTON
submitNoteBtn.addEventListener("click", (e) => {
    let modalId = "#add-note-modal";
    addNote(notesList, modalId);
});
// TOP FILTER BUTTONS
for (let btn of topSideBarBtns) {
    btn.addEventListener("click", (e) => {
        makeNotes(filterNotes(notesList, "all", false, btn.id));
    });
}
// MAIN NOTES BUTTON
mainNotesBtn.addEventListener("click", () => {
    let filteredNotes = filterNotes(notesList, "all", false, false);
    makeNotes(filteredNotes, false);
    fixCheckboxes();
});
