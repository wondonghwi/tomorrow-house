const productTab = document.querySelector('.product-tab');
const productTabBtnList = productTab.querySelectorAll('button');

let currentActiveTab = productTab.querySelector('.is-active');

const toggleActiveTab = index => {
  const tabItem = productTabBtnList[index].parentNode;

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;
  }
};

productTabBtnList.forEach((button, index) => {
  button.addEventListener('click', () => toggleActiveTab(index));
});
