let allContentButtonType = document.querySelector(".slider-2");
let openButtonType = document.querySelector(".section-type__button");
let textButtonType = document.querySelector(".type-button__text");
let svgArrowsType = document.querySelector(".type-button__svg-arrows");
let checkType = false;

openButtonType.addEventListener("click", function (evt) {
    if (!checkType) {
        allContentButtonType.style.height = allContentButtonType.scrollHeight + "px";
        textButtonType.textContent = "Скрыть";
        svgArrowsType.classList.add("type-button__svg-arrows--hide");
        checkType = true;
    } else {
        allContentButtonType.style.height = "164px";
        textButtonType.textContent = "Показать все";
        checkType = false;
        svgArrowsType.classList.remove("type-button__svg-arrows--hide");
    }
});