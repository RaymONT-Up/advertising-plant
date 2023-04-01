import videoPreviewInit from "./video-preview.js";
videoPreviewInit();

const franchiseCompositionSlider = new Swiper(
  ".franchise-composition__slider",
  {
    slidesPerView: 4.4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".franchise-composition__slider-arrow--next",
      prevEl: ".franchise-composition__slider-arrow--prev",
    },
  }
);
const franchiseStepsSlider = new Swiper(".franchise-steps__slider", {
  slidesPerView: 7,
  spaceBetween: 15,
});
