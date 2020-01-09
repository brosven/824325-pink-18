var pageHeader = document.querySelector('.page-header');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--close')) {
    pageHeader.classList.remove('page-header--close');
  } else {
    pageHeader.classList.add('page-header--close');
  }
});
