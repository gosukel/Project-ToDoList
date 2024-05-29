export default function makeImage(img) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", img.url);
    newImg.setAttribute("id", img.id);
    newImg.classList.add(img.class);
    return newImg;
}
