const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children;
const orderFormModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

const openOrderModal = () => {
  orderFormModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
};
const closeOrderModal = () => {
  orderFormModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
};
const toggleOrderCtaBookmark = () => {
  const [icon, countSpan] = orderCtaBookmarkBtn.children;
  const count = parseInt(countSpan.innerHTML.replaceAll(',', ''));
  let newCount = count;
  if (orderCtaBuyBtn.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark');
    icon.classList.remove('ic-bookmark-filled');
    newCount -= 1;
  } else {
    icon.classList.add('ic-bookmark-filled');
    icon.classList.remove('ic-bookmark');
    newCount += 1;
  }

  countSpan.innerHTML = newCount.toLocaleString('ko-Kr');
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString('ko-Kr')}`);
  orderCtaBuyBtn.classList.toggle('is-active');
};

orderCtaBuyBtn.addEventListener('click', openOrderModal);
orderModalOverlay.addEventListener('click', closeOrderModal);
orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark);
