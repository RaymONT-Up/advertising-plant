const ourGoalInviteListSliderour = new Swiper(".our-goal__intive-slider", {
  slidesPerView: 5,
  spaceBetween: 25,
  breakpoints: {
    200: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
    1000: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
if (window.innerWidth < 900) {
  const profitableTermsBonusesSlider = new Swiper(
    ".profitable-terms__bonuses-mobile",
    {
      breakpoints: {
        200: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        380: {
          slidesPerView: 2.5,

          spaceBetween: 30,
        },
        600: {
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
      },
    }
  );
}
