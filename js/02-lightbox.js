import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallerySection = document.querySelector(".gallery");
const galleryMarkUp = createGalleryMarkUp(galleryItems);

gallerySection.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
} 


  var lightbox = new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
    captionData: "alt",
  });