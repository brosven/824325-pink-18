var pageHeader = document.querySelector('.page-header');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var pageRepresentation = document.querySelector('.page-representation');
var downloadRepresentation = document.querySelector('.download-app__representation');
var pageHeaderIconToggle = document.querySelector('.page-header__icon-toggle');

pageHeaderToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--close')) {
    pageHeader.classList.remove('page-header--close');
    pageRepresentation.classList.remove('page-representation--close');
    downloadRepresentation.classList.remove('download-app__representation--close');
    pageHeaderIconToggle.classList.remove('page-header__icon-toggle--hide');
  } else {
    pageHeader.classList.add('page-header--close');
    pageRepresentation.classList.add('page-representation--close');
    downloadRepresentation.classList.add('download-app__representation--close');
    pageHeaderIconToggle.classList.add('page-header__icon-toggle--hide');
  }
});
