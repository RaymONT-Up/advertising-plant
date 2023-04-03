const heroSlider = new Swiper(".hero__slider", {
  slidesPerView: 1,
  autoHeigth: true,
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".hero__slider-arrow--next",
    prevEl: ".hero__slider-arrow--prev",
  },
});
const ourClientsSlider = new Swiper(".our-clients__slider", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".our-clients__slider-arrow--next",
    prevEl: ".our-clients__slider-arrow--prev",
  },
});

const stagesOfWorkSlider = new Swiper(".stages-of-work__slider", {
  slidesPerView: 6,
  spaceBetween: 20,
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    360: {
      slidesPerView: 2.2,
    },
    430: {
      slidesPerView: 2.5,
    },
    600: {
      slidesPerView: 3.2,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1100: {
      slidesPerView: 0,
      spaceBetween: 0,
    },

    1300: {
      slidesPerView: 0,
      spaceBetween: 0,
    },
  },
});
// }
const pressCenterSlider = new Swiper(".press-center__slider", {
  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    600: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".press-center__slider-arrow--next",
    prevEl: ".press-center__slider-arrow--prev",
  },
});

// Если это мобильное устройство
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
} else {
  // В случае если слидер должен быть только на PC
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
}
