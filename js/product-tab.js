const productTab = document.querySelector('.product-tab');
const productTabBtnList = productTab.querySelectorAll('button');

const TOP_PANEL_MOBILE = 130;
const TOP_PANEL_DESKTOP = 184;

let currentActiveTab = productTab.querySelector('.is-active');
let disableUpdating = false;

const toggleActiveTab = index => {
  const tabItem = productTabBtnList[index].parentNode;

  if (currentActiveTab !== tabItem) {
    disableUpdating = true;
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
  }
};

const scrollToTabPanel = index => {
  const tabPanelId = productTabBtnList[index].parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);
  const scrollTop = tabPanel.getBoundingClientRect().top;

  window.scrollBy({
    top: scrollTop - (window.innerWidth >= 768 ? TOP_PANEL_DESKTOP : TOP_PANEL_MOBILE),
    behavior: 'smooth',
  });
};

productTabBtnList.forEach((button, index) => {
  button.addEventListener('click', () => toggleActiveTab(index));
  button.addEventListener('click', () => scrollToTabPanel(index));
});

// NOTE : 각각의 tabPanel의 y축 위치를 구하는 방법 = window.scrollY + getBoundingClientRect().top()
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
];
const productTabPanelList = productTabPanelIdList.map(elem => {
  return document.querySelector(`#${elem}`);
});

const productTabPanelPositionMap = {};

const detectTabPanelPosition = () => {
  productTabPanelList.forEach(panel => {
    const id = panel.getAttribute('id');
    const position = window.scrollY + panel.getBoundingClientRect().top;
    productTabPanelPositionMap[id] = position;
  });
  updateActiveTabScroll();
};

const updateActiveTabScroll = () => {
  if (disableUpdating) return;
  // 1.현재 유저가 얼마만큼 스크롤을 했나 -> window.scrollY
  // 2.각 tabPanel y축의 위치 = productTabPanelPositionMap

  const scrolledAmount = window.scrollY + (window.innerWidth >= 768 ? TOP_PANEL_DESKTOP + 80 : TOP_PANEL_MOBILE + 8);
  let newActiveTab;
  if (scrolledAmount > productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabBtnList[4]; //추천버튼
  } else if (scrolledAmount > productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabBtnList[3]; //배송/환불 버튼
  } else if (scrolledAmount > productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabBtnList[2]; //문의 버튼
  } else if (scrolledAmount > productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabBtnList[1]; //리뷰 버튼
  } else {
    newActiveTab = productTabBtnList[0]; //상품정보 버튼
  }

  // 끝까지 스크롤 한 경우 = newActiveTab = productTabBtnList[4]
  const bodyHeight = document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0);
  if (window.scrollY + window.innerHeight >= bodyHeight) {
    newActiveTab = productTabBtnList[4];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;
    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active');
      if (currentActiveTab) {
        currentActiveTab.classList.remove('is-active');
      }
      currentActiveTab = newActiveTab;
    }
  }
};

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', _.debounce(detectTabPanelPosition, 300));
window.addEventListener('scroll', _.throttle(updateActiveTabScroll, 300));
