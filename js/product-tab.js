const productTab = document.querySelector('.product-tab');
const productTabBtnList = productTab.querySelectorAll('button');
let currentActiveTab = productTab.querySelector('.is-active');

const TOP_PANEL_MOBILE = 130;
const TOP_PANEL_DESKTOP = 184;

const toggleActiveTab = index => {
  const tabItem = productTabBtnList[index].parentNode;

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;
  }
};

const scrollToTabPanel = index => {
  const tabPanelId = productTabBtnList[index].parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);
  const scrollTop = tabPanel.getBoundingClientRect().top;

  window.scrollBy({
    top: window.innerWidth >= 768 ? scrollTop - TOP_PANEL_DESKTOP : scrollTop - TOP_PANEL_MOBILE,
    behavior: 'smooth',
  });
};

productTabBtnList.forEach((button, index) => {
  button.addEventListener('click', () => toggleActiveTab(index));
  button.addEventListener('click', () => scrollToTabPanel(index));
});
