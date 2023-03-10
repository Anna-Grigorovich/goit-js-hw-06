// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", inputValidator);

// function inputValidator(event) {
//   if (event.currentTarget.value.length >= event.currentTarget.dataset.length) {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   } else if (
//     event.currentTarget.value.length <= event.currentTarget.dataset.length
//   ) {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// }

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputValidator);

function inputValidator(event) {
  if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else if (
    event.currentTarget.value.length == event.currentTarget.dataset.length
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else if (
    event.currentTarget.value.length > event.currentTarget.dataset.length
  ) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
