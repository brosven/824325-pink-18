var pageHeader = document.querySelector('.page-header');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var pageRepresentation = document.querySelector('.page-representation');
var downloadRepresentation = document.querySelector('.download-app__representation');
var pageHeaderIconMenu = document.querySelector('.page-header___icon-menu');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--close')) {
    pageHeader.classList.remove('page-header--close');
    pageRepresentation.classList.remove('page-representation--close');
    downloadRepresentation.classList.remove('download-app__representation--close');
    pageHeaderIconMenu.classList.remove('page-header__icon-toggle--hide');
    pageHeaderToggle.classList.remove('page-header__toggle--burger-width');
  } else {
    pageHeader.classList.add('page-header--close');
    pageRepresentation.classList.add('page-representation--close');
    downloadRepresentation.classList.add('download-app__representation--close');
    pageHeaderIconMenu.classList.add('page-header__icon-toggle--hide');
    pageHeaderToggle.classList.add('page-header__toggle--burger-width');
  }
});
