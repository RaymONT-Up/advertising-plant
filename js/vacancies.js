const vacanciesSlider = new Swiper(".career-opportunities__slider", {
  slidesPerView: 5,
  spaceBetween: 20,
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
