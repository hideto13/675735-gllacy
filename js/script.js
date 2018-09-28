var menu = document.querySelector(".site-navigation-item:first-child");
var menuList = document.querySelector(".catalog-name-list");
var search = document.querySelector(".user-navigation-item-search");
var searchModal = document.querySelector(".modal-search");
var enter = document.querySelector(".user-navigation-item-enter");
var enterModal = document.querySelector(".modal-enter");
var cases = document.querySelector(".user-navigation-item-case");
var caseModal = document.querySelector(".modal-case");
var catalogItem = document.querySelector(".catalog-item");
var catalogCard = document.querySelector(".catalog-item-card");
var button = document.querySelector(".form-button");
var contactsModal = document.querySelector(".modal-contacts");


menu.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuList.classList.add("catalog-name-list-show");
});

search.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchModal.classList.add("modal-show");
});

enter.addEventListener("click", function (evt) {
    evt.preventDefault();
    enterModal.classList.add("modal-show");
});

cases.addEventListener("click", function (evt) {
    evt.preventDefault();
    caseModal.classList.add("modal-show");
});

catalogItem.addEventListener("hover", function (evt) {
    catalogCard.classList.add("catalog-show");
});

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsModal.classList.add("modal-show");
});

