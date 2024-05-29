export default function clearNotes() {
    const mainDiv = document.querySelector("#main-notes-container");
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
}
