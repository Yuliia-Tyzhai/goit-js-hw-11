export const createGalleryCardTemplate = (imgInfo) => {
    return `<li class="gallery-card">
               <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
            </li>`;
}