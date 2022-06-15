const searchModal = document.querySelector('.search-modal');
const searchOverlay = document.querySelector('.overlay');
const searchBtn = document.querySelector('.gnb-icon-button.is-search');
const searchModalCloseBtn = searchModal.querySelector('.search-modal-form .btn-ghost.btn-40');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('is-active');
  searchOverlay.classList.add('is-active');
});

searchModalCloseBtn.addEventListener('click', () => {
  searchModal.classList.remove('is-active');
  searchOverlay.classList.remove('is-active');
});
