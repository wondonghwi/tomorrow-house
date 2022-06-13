const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = document.querySelector('input');
const gnbSearchHistory = document.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');
const deleteAllBtn = gnbSearchHistory.querySelector('.search-history-header button');
const deleteBtnList = gnbSearchHistoryList.querySelectorAll('.delete-button');

const closeGnbSearch = () => {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistoryOutSide);
};

const closeGnbSearchHistoryOutSide = e => {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearch();
  }
};

const openGnbSearchHistory = () => {
  if (gnbSearchHistoryList.children.length === 0) return;

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOutSide);
  }
  gnbSearchHistory.classList.add('is-active');
};

const deleteAllSearchHistory = () => {
  gnbSearchHistoryList.innerHTML = '';
  closeGnbSearch();
};

const deleteSearchHistoryItem = (e, index) => {
  e.stopPropagation();
  const itemDelete = deleteBtnList[index].parentNode;
  gnbSearchHistoryList.removeChild(itemDelete);

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearch();
  }
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllBtn.addEventListener('click', deleteAllSearchHistory);

deleteBtnList.forEach((button, index) => {
  button.addEventListener('click', e => deleteSearchHistoryItem(e, index));
});
