let contentMenu = document.querySelector(".sidebar-menu");
let contentModalCall = document.querySelector(".modal-call");
let openButtonModalCall = document.querySelector(".modal-call__button--open");
let closeButtonModalCall = document.querySelector(".modal-call__button--close");
let whiteBackgroundModalCall = document.querySelector(".background-white");

openButtonModalCall.addEventListener("click", function (evt) {
    contentModalCall.classList.add("modal-call--open");
    whiteBackgroundModalCall.classList.add("background-white--active");
});

closeButtonModalCall.addEventListener("click", function (evt) {
    contentModalCall.classList.remove("modal-call--open");
    whiteBackgroundModalCall.classList.remove("background-white--active");
});

let openButtonModalCallSidebar = document.querySelector(".sidebar-modal-call__button--open");
openButtonModalCallSidebar.addEventListener("click", function (evt) {
    contentModalCall.classList.add("modal-call--open");
    whiteBackgroundModalCall.classList.add("background-white--active");
    contentMenu.classList.remove("sidebar-menu--open");
});

closeButtonModalCall.addEventListener("click", function (evt) {
    contentModalCall.classList.remove("modal-call--open");
    whiteBackgroundModalCall.classList.remove("background-white--active");
});

let contentModalFeedback = document.querySelector(".modal-feedback");
let openButtonModalFeedback = document.querySelector(".modal-feedback__button--open");
let closeButtonModalFeedback = document.querySelector(".modal-feedback__button--close");
let whiteBackgroundModalFeedback = document.querySelector(".background-white");

openButtonModalFeedback.addEventListener("click", function (evt) {
    contentModalFeedback.classList.add("modal-feedback--open");
    whiteBackgroundModalFeedback.classList.add("background-white--active");
});

closeButtonModalFeedback.addEventListener("click", function (evt) {
    contentModalFeedback.classList.remove("modal-feedback--open");
    whiteBackgroundModalFeedback.classList.remove("background-white--active");
});

let openButtonModalFeedbackSidebar = document.querySelector(".sidebar-modal-feedback__button--open");
openButtonModalFeedbackSidebar.addEventListener("click", function (evt) {
    contentModalFeedback.classList.add("modal-feedback--open");
    whiteBackgroundModalFeedback.classList.add("background-white--active");
    contentMenu.classList.remove("sidebar-menu--open");
});

closeButtonModalFeedback.addEventListener("click", function (evt) {
    contentModalFeedback.classList.remove("modal-feedback--open");
    whiteBackgroundModalFeedback.classList.remove("background-white--active");
});