var pageHeader = document.querySelector('.page-header');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var pageRepresentation = document.querySelector('.page-representation');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--close')) {
    pageHeader.classList.remove('page-header--close');
    pageRepresentation.classList.remove('page-representation--close');
  } else {
    pageHeader.classList.add('page-header--close');
    pageRepresentation.classList.add('page-representation--close');
  }
});
