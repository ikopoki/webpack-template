let allContentButtonMain = document.querySelector(".section-main__text");
let openButtonMain = document.querySelector(".section-main__button");
let textButtonMain = document.querySelector(".section-main__button-text");
let svgArrowsMain = document.querySelector(".section-main__button-svg-arrows");
let checkMain = false;

openButtonMain.addEventListener("click", function (evt) {
    if (!checkMain) {
        allContentButtonMain.style.height = allContentButtonMain.scrollHeight + "px";
        textButtonMain.textContent = "Скрыть";
        svgArrowsMain.classList.add("section-main__button-svg-arrows--hide");
        checkMain = true;
    } else {
        allContentButtonMain.style.height = "134.5px";
        textButtonMain.textContent = "Читать далее";
        checkMain = false;
        svgArrowsMain.classList.remove("section-main__button-svg-arrows--hide");
    }
});