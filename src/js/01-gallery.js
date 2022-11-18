// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);

const gallaryListRef = document.querySelector('.gallery');

gallaryListRef.insertAdjacentHTML(
  'afterbegin',
  createGallaryMarkUp(galleryItems)
);

function createGallaryMarkUp(images) {
  return images
    .map(({ original, preview, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}

gallaryListRef.addEventListener('click', onClickGallary);

function onClickGallary(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  `
    <div class="gallery">
      <a href="${e.target.getAttribute('href')}">
        <img src="${e.target.getAttribute(
          'src'
        )}" alt="" title="${e.target.getAttribute('let')}" />
        </a>
         <a href="${e.target.getAttribute('href')}">
        <img src="${e.target.getAttribute(
          'src'
        )}" alt="" title="${e.target.getAttribute('let')}" />
        </a>
    </div>;
   `;
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    // Do something…
  });
}
