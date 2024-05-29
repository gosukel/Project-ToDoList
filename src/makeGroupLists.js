export default function makeGroupLists(groups) {
    const botSidebar = document.querySelector("#sidebar-bottom-container");
    for (let group of groups) {
        let tempGroup = document.createElement("div");
        tempGroup.classList.add("sidebar-bottom-group-item");
        botSidebar.appendChild(tempGroup);
        let tempGroupBtn = document.createElement("button");
        tempGroupBtn.classList.add("group-item-btn");
        tempGroupBtn.textContent = group;
        tempGroup.appendChild(tempGroupBtn);
    }
}
