const allInputs = document.querySelectorAll("input");

const addFormValidation = (inputElement) => {
  inputElement.addEventListener("input", validateElement);
};
function validateElement(inputElement) {
  const input = inputElement.target;
  const errorText = input.nextElementSibling;
  if (input.validity.valid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    errorText.style.opacity = "0";
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorText.style.opacity = "1";
  }
}

Array.from(allInputs).forEach((input) => addFormValidation(input));
