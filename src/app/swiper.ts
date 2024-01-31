import Swiper from "swiper";
import { SwiperOptions } from "swiper/types/swiper-options";
export const baseSettings: SwiperOptions = {
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
}

export const defineSwiper = function (className: string, settings: SwiperOptions) {
    return new Swiper(className, settings);
}