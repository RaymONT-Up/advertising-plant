const faq = () => {
  const accordions = document.querySelectorAll(".faq__accordion");

  accordions.forEach(el => {
    el.addEventListener("click", e => {
      const self = e.currentTarget;
      const btn = self.querySelector(".faq__accordion-btn");
      const content = self.querySelector(".faq__accordion-content");

      if (self.classList.contains("faq__accordion--open")) {
        self.classList.remove("faq__accordion--open");
        content.style.maxHeight = null;
        return;
      }

      // accordions.forEach(item => {
      //   item.classList.remove("faq__accordion--open");
      //   item.querySelector(".faq__accordion-content").style.maxHeight = null;
      // });

      self.classList.add("faq__accordion--open");
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  });
  // Init click
  accordions[0].click();
};
faq();
