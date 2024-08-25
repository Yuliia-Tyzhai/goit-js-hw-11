import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




import { createGalleryCardTemplate } from "./js/render-functions.js";
import { fetchPhotos } from "./js/pixabay-api.js";


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');


const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedValue = searchFormEl.elements.user_query.value;
    fetchPhotos(searchedValue).then(data => {
        console.log(data); const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
        galleryEl.innerHTML = galleryCardsTemplate;
    }).catch(err => {
        console.log(err)
    })
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

