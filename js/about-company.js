import videoPreviewInit from "./video-preview.js";
videoPreviewInit();
const historyOfCompanyImagesSlider = new Swiper(
  ".history-of-company__activity-images",
  {
    slidesPerView: 3,
    spaceBetween: 40,
  }
);
const teamCardSlider = new Swiper(".team-card__slider", {
  slidesPerView: 5,
  spaceBetween: 40,

  navigation: {
    nextEl: ".team-card__slider-arrow--next",
    prevEl: ".team-card__slider-arrow--prev",
  },
});
