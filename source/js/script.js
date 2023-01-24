let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__nav--nojs');

if (navMain.classList.contains('main-header__nav')) {
  navMain.classList.add('main-header__nav--closed');
}

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
  }
});
