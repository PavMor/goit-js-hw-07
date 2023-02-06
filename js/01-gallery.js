import { galleryItems } from "./gallery-items.js";

const gallerySection = document.querySelector(".gallery");
const galleryMarkUp = createGalleryMarkUp(galleryItems);

gallerySection.insertAdjacentHTML("beforeend", galleryMarkUp);
gallerySection.addEventListener("click", onGalleryImageClick);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link"
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
    })
    .join("");
}
function onGalleryImageClick(event) {
  event.preventDefault();
  const closeModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <img width="800" height="600" src = ${event.target.dataset.source}>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}
