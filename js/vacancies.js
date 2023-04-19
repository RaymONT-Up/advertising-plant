const vacanciesSlider = new Swiper(".career-opportunities__slider", {
  slidesPerView: 5,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 1.7,
    },
    461: {
      slidesPerView: 2.2,
    },
    560: {
      slidesPerView: 2.7,
    },
    700: {
      slidesPerView: 3.33,
    },
    800: {
      slidesPerView: 3.7,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

const fileInput = document.getElementById("resume-file");
const customInput = document.querySelector(
  ".contact-resume__form--custom-file"
);

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    customInput.textContent = fileInput.files[0].name;
  } else {
    customInput.textContent = "Прикрепить файл";
  }
});
