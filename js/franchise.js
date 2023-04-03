const franchiseCompositionSlider = new Swiper(
  ".franchise-composition__slider",
  {
    slidesPerView: 4.4,
    spaceBetween: 20,

    breakpoints: {
      200: {
        slidesPerView: 1.1,
      },
      360: {
        slidesPerView: 1.3,
      },
      600: {
        slidesPerView: 2.2,
      },
      900: {
        slidesPerView: 3.4,
      },
      1200: {
        slidesPerView: 4.4,
      },
    },

    navigation: {
      nextEl: ".franchise-composition__slider-arrow--next",
      prevEl: ".franchise-composition__slider-arrow--prev",
    },
  }
);
const franchiseStepsSlider = new Swiper(".franchise-steps__slider", {
  slidesPerView: 7,
  spaceBetween: 15,

  breakpoints: {
    200: {
      slidesPerView: 1.5,
    },
    360: {
      slidesPerView: 2.6,
    },
    500: {
      slidesPerView: 3.5,
    },
    715: {
      slidesPerView: 4.5,
    },
    865: {
      slidesPerView: 5.3,
    },
    1100: {
      slidesPerView: 7,
    },
  },
});
