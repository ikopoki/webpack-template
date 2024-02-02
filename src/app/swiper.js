window.addEventListener("DOMContentLoaded", () => {
    const resizableSwiper = (
        breakpoint,
        swiperClass,
        swiperSettings, callback,
    ) => {

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        };

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener("change", checker);
        checker();
    };

    resizableSwiper("(max-width: 767px)", ".swiper", {
        loop: false,
        spaceBetween: 16,
        slidesPerView: 1.3,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            340: {
                slidesPerView: 1.3,
            },
            360: {
                slidesPerView: 1.5,
            },
            450: { slidesPerView: 2 },
            550: { slidesPerView: 2.3 },
            570: { slidesPerView: 2 },
            650: { slidesPerView: 2.8 },
            700: { slidesPerView: 4 },
        },
    });
});

const buttonMore = document.querySelector(".more");

let resizeWrapper = function () {
    if (buttonMore.textContent == "Показать всё") {
        document.querySelector(".content__wrapper").classList.add("openMore");
        buttonMore.classList.add("more--up");
        buttonMore.textContent = "Скрыть";
    } else {
        document.querySelector(".content__wrapper").classList.remove("openMore");
        buttonMore.classList.remove("more--up");
        buttonMore.textContent = "Показать всё";
    }
};
buttonMore.addEventListener("click", resizeWrapper);
