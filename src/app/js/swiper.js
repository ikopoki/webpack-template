window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 767px)', '.slider-1', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.section-brands__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: { slidesPerView: 2 },
      550: { slidesPerView: 2.3 },
      570: { slidesPerView: 2 },
      650: { slidesPerView: 2.8 },
      700: { slidesPerView: 4 }
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-2', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.section-type__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: { slidesPerView: 2 },
      550: { slidesPerView: 2.3 },
      570: { slidesPerView: 2 },
      650: { slidesPerView: 2.8 },
      700: { slidesPerView: 4 }
    }
  })

  resizableSwiper('(max-width: 767px)', '.slider-3', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesPerView: 1.2,
    pagination: {
      el: '.section-price__swiper-pagination',
      clickable: true
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3
      },
      360: {
        slidesPerView: 1.5
      },
      450: { slidesPerView: 2 },
      550: { slidesPerView: 2.3 },
      570: { slidesPerView: 2 },
      650: { slidesPerView: 2.8 },
      700: { slidesPerView: 4 }
    }
  })
})
