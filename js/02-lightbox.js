import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(`.gallery`);
galleryMarkup();

function galleryMarkup() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`,"");
  list.insertAdjacentHTML("beforeend", markup);
}

new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
