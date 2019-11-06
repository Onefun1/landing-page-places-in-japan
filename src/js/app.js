(function() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header-active');
    } else {
      header.classList.remove('header-active');
    }
  };
})();

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });

  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });
})();