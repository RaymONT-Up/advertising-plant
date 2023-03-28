const heroSlider = new Swiper(".hero__slider", {
  // Optional parameters
  // direction: "horizontal",
  slidesPerView: 1,
  autoHeigth: true,

  // // Navigation arrows
  navigation: {
    nextEl: ".hero__slider-arrow--next",
    prevEl: ".hero__slider-arrow--prev",
  },
});
