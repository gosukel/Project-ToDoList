export default function openNoteModal(groups, modalId) {
    const dlg = document.querySelector(modalId);
    const listGroup = document.querySelector("#list-group");
    // clear group first
    while (listGroup.firstChild) {
        listGroup.removeChild(listGroup.lastChild);
    }
    // fill select with groups
    for (let group of groups) {
        let option = document.createElement("option");
        option.setAttribute("value", group);
        option.textContent = group;
        listGroup.appendChild(option);
    }
    dlg.showModal();
}
