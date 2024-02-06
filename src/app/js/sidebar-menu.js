let contentMenu = document.querySelector(".sidebar-menu");
let openButtonMenu = document.querySelector(".button-menu--open");
let closeButtonMenu = document.querySelector(".button-menu--close");
let whiteBackground = document.querySelector(".background-white");

function closeMenu() {
    contentMenu.classList.remove("sidebar-menu--open");
    whiteBackground.classList.remove("background-white--active");
}

openButtonMenu.addEventListener("click", function (evt) {
    contentMenu.classList.add("sidebar-menu--open");
    whiteBackground.classList.add("background-white--active");
});

closeButtonMenu.addEventListener("click", function (evt) {
    closeMenu();
});

whiteBackground.addEventListener("click", function (evt) {
    if (contentMenu.classList.contains("sidebar-menu--open")) {
        closeMenu();
    }
});