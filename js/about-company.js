const historyOfCompanyImagesSlider = new Swiper(
  ".history-of-company__activity-images",
  {
    // slidesPerView: 3,
    // spaceBetween: 40,
    breakpoints: {
      200: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.2,

        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  }
);
const teamCardSlider = new Swiper(".team-card__slider", {
  slidesPerView: 5,

  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    200: {
      slidesPerView: 2.6,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1240: { slidesPerView: 5, spaceBetween: 40 },
  },

  navigation: {
    nextEl: ".team-card__slider-arrow--next",
    prevEl: ".team-card__slider-arrow--prev",
  },
});
