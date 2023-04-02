const popupContactInit = () => {
  const buttons = document.querySelectorAll(".popup-contact-open-btn");

  const popupContact = document.querySelector(".popup-contact");
  const popupBg = popupContact.querySelector(".popup-contact__background");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      popupContact.classList.toggle("popup-contact--active");
      document.body.style.paddingRight = `${6}px`;
      document.body.style.overflow = `hidden`;
    });
  });
  popupBg.addEventListener("click", () => {
    popupContact.classList.remove("popup-contact--active");
    document.body.style.paddingRight = `${0}px`;
    document.body.style.overflow = `auto`;
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      popupContact.classList.remove("popup-contact--active");
      document.body.style.paddingRight = `${0}px`;
      document.body.style.overflow = `auto`;
    }
  });
  console.log(buttons);
};
export default popupContactInit;
