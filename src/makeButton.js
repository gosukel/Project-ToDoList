export default function makeButton(btn) {
    let newBtn = document.createElement("button");
    newBtn.innerText = btn.buttonText;
    newBtn.classList.add(btn.buttonClass);
    newBtn.setAttribute("id", btn.buttonId);
    return newBtn;
}
