const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = document.querySelector('input');
const gnbSearchHistory = document.querySelector('.search-history');

const closeGnbSearchHistory = e => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistory);
  }
};

const openGnbSearchHistory = () => {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory);
  }
  gnbSearchHistory.classList.add('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
