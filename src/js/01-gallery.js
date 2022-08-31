import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery")
const makeup = galleryItems.reduce((acc, item) => {
    return acc += 
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="Image description" />
        </a>`
}, "")

gallery.insertAdjacentHTML('afterbegin', makeup)

const galleryLightbox = new SimpleLightbox('.gallery a', 
{showCounter: false, 
close: false, 
captionsData: 'alt', 
captionDelay: 250,});

galleryLightbox.on();