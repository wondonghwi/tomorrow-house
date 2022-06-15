const myMenu = document.querySelector('.my-menu');
const myMenuBtn = document.querySelector('.my-menu-button');

const closeMyMenuOutside = e => {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closeMyMenuOutside);
  }
};

const toggleMyMenu = () => {
  if (myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOutside);
  }

  myMenu.classList.toggle('is-active');
};

myMenuBtn.addEventListener('click', toggleMyMenu);
