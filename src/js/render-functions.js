import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  if (!galleryContainer) {
    console.error('Gallery container not found.');
    return;
  }

  const galleryMarkup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="image-info">
            <div class="info-item"><b>Likes</b><p>${likes}</p></div>
            <div class="info-item"><b>Views</b><p>${views}</p></div>
            <div class="info-item"><b>Comments</b><p>${comments}</p></div>
            <div class="info-item"><b>Downloads</b><p>${downloads}</p></div>
          </div>
        </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }

  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-visible');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-visible');
  }
}
