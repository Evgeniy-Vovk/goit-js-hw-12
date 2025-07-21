export default function createMarkUp({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          loading="lazy"
        >
      </a>
      <div class="gallery-info">
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Likes</p>
          <p class="gallery-info-div-value">${likes.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Views</p>
          <p class="gallery-info-div-value">${views.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Comments</p>
          <p class="gallery-info-div-value">${comments.toLocaleString()}</p>
        </div>
        <div class="gallery-info-div">
          <p class="gallery-info-div-text">Downloads</p>
          <p class="gallery-info-div-value">${downloads.toLocaleString()}</p>
        </div>
      </div>
    </li>
  `;
}
