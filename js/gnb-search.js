const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = document.querySelector('input');
const gnbSearchHistory = document.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');
const deleteAllBtn = gnbSearchHistory.querySelector('.search-history-header button');

const closeGnbSearchHistory = e => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistory);
  }
};

const openGnbSearchHistory = () => {
  if (gnbSearchHistoryList.children.length === 0) return;

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory);
  }
  gnbSearchHistory.classList.add('is-active');
};

const deleteAllSearchHistory = () => {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllBtn.addEventListener('click', deleteAllSearchHistory);
