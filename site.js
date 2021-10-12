let menuButton = document.querySelector('.hamburger');
let navigationList = document.querySelector('.navigation__list');
let topButton = document.getElementById('topBtn');

// Menu selector
menuButton.addEventListener('click', function () {
  navigationList.classList.toggle('show');
});

// top btn function
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
