const quizBts = document.querySelectorAll(".quiz__btn");
const quizForms = document.querySelectorAll(".popup[data-quiz-index]");
const finalForm = document
  .querySelector("#quiz--7")
  .querySelector(".quiz__form");

quizBts.forEach(btn => {
  btn.addEventListener("click", e => {
    const to = btn.dataset.quizTo;
    const from = btn.dataset.quizFrom;

    const currentQuiz = quizForms[from - 1];
    const nextQuiz = quizForms[to - 1];

    const quizInputs = currentQuiz.querySelectorAll("input");
    quizInputs.forEach(input => {
      if (input.checked) {
        const inputName = input.name;
        const finalInput = finalForm[inputName];
        const inputTextName = input.dataset.quizInputName;

        let inputData = input.value;

        if (input.dataset.quizInputName !== undefined) {
          const inputText = document.querySelector(
            `.quiz__input[data-quiz-input-text=${inputTextName}]`
          ).value;
          inputData = `${inputTextName}: ${inputText}`;
        }

        // Присваиваю для конечного инпута value
        finalInput.value = inputData;
        finalInput.dataset.value = inputData;
        console.log(finalInput.dataset.value);

        // Закрываю текущий и отккываю новый P.S function from popup.js
        popupOpen(nextQuiz);
        return;
      }
    });
  });
});
