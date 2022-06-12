const drawerMenuBtnList = document.querySelectorAll('.sidebar-nav .drawer-menu-button');

function toggleBtn() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuBtnList.forEach(item => {
  item.addEventListener('click', toggleBtn);
});
