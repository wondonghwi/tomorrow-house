const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children;

const orderFormModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

orderCtaBuyBtn.addEventListener('click', () => {
  orderFormModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
});

orderModalOverlay.addEventListener('click', () => {
  orderFormModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
});
