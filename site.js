// Menu selector
let menuButton = document.querySelector('.hamburger');
let navigationList = document.querySelector('.navigation__list');

menuButton.addEventListener('click', function () {
  navigationList.classList.toggle('show');
});
