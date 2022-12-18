
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(`.gallery`);
let fullPhoto;
list.addEventListener("click", onClick);
galleryMarkup();

function galleryMarkup() {
  const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
}) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-source="${original}"
    />
</a>
</div>`,"");
  list.insertAdjacentHTML("beforeend", markup);
}

function onClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let currentFullPhoto = evt.target.dataset.source;

  fullPhoto = basicLightbox.create(`
    <img src="${currentFullPhoto}" width="1000" height="800">
`);
  window.addEventListener("keydown", closePicture);
  fullPhoto.show();
}

function closePicture(evt) {
  if (evt.code === "Escape") {
    fullPhoto.close();
    window.removeEventListener("keydown", closePicture);
  }
}