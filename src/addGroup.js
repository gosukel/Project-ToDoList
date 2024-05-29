import handleLocalStorage from "./handleLocalStoage";

export default function addGroup(groups, remakeSidebar, modalId) {
    const groupNameInput = document.querySelector("#group-name");
    const dlg = document.querySelector(modalId);
    groups.push(groupNameInput.value);
    handleLocalStorage("update", groups, false);
    remakeSidebar(groups);
    dlg.close();
}
