const heroSlider = new Swiper(".hero__slider", {
  slidesPerView: 1,
  autoHeigth: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".hero__slider-arrow--next",
    prevEl: ".hero__slider-arrow--prev",
  },
});
const ourMissionSlider = new Swiper(".our-mission__slider", {
  direction: "vertical",

  pagination: {
    el: ".our-mission__slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className}">  
        <span>0${index + 1}</span>
      </button>`;
    },
  },
});
