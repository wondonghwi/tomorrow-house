const sectionHeaderBtn = document.querySelector('.product-shipment .product-section-header');

sectionHeaderBtn.addEventListener('click', () => {
  const header = sectionHeaderBtn.parentNode;
  header.classList.add('is-open');
});
