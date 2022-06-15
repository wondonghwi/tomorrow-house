const sidebarMenuBtn = document.querySelector('.gnb-Icon-button.is-menu');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

const openSidebar = () => {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
};

const removeSidebar = () => {
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
};

sidebarMenuBtn.addEventListener('click', openSidebar);

sidebarOverlay.addEventListener('click', removeSidebar);
