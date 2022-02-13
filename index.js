const allInputs = document.querySelectorAll("input:not(.confirmed)");
const mainPassword = document.querySelector(".password");
const confirmedPassword = document.querySelector(".confirmed");
const submitButton = document.querySelector(".create-button");
const addFormValidation = (inputElement) => {
  inputElement.addEventListener("input", validateElement);
};
confirmedPassword.addEventListener("input", validateConfirmed);
function validateConfirmed() {
  const errorText = confirmedPassword.nextElementSibling;
  if (
    confirmedPassword.value !== "" &&
    mainPassword.value === confirmedPassword.value
  ) {
    confirmedPassword.classList.add("valid");
    confirmedPassword.classList.remove("invalid");
    errorText.style.opacity = "0";
  } else {
    confirmedPassword.classList.add("invalid");
    confirmedPassword.classList.remove("valid");
    errorText.style.opacity = "1";
  }
  buttonValid();
}
function validateElement(inputElement) {
  const input = inputElement.target;
  const errorText = input.nextElementSibling;
  if (input.getAttribute("type") === "password") {
    if (confirmedPassword.value !== "") {
      validateConfirmed();
    }
  }
  if (input.validity.valid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    errorText.style.opacity = "0";
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorText.style.opacity = "1";
  }
  buttonValid();
}
const buttonValid = () => {
  const amountOfValidInputs = document.querySelectorAll(".valid").length;
  console.log(amountOfValidInputs);
  if (amountOfValidInputs === 6) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
};
Array.from(allInputs).forEach((input) => addFormValidation(input));
