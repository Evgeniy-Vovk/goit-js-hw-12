import axios from 'axios';
import iziToast from 'izitoast';
import createMarkUp from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loader');

form.addEventListener('submit', submitHandler);

async function submitHandler(event) {
  event.preventDefault();

  const keyWord = event.target.elements.formInput.value.trim();
  gallery.innerHTML = '';
  loading.classList.remove('visually-hidden');

  if (!keyWord) {
    iziToast.show({
      message: 'Please enter a search term.',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    loading.classList.add('visually-hidden');
    return;
  }

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '47396340-f7005e76dc1b3bde31bf703a9',
        q: keyWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
      },
    });

    const images = response.data.hits;

    if (!images.length) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    const markUp = images.map(item => createMarkUp(item)).join('');
    gallery.innerHTML = markUp;

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      message: error.message,
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  } finally {
    loading.classList.add('visually-hidden');
    event.target.reset();
  }
}
