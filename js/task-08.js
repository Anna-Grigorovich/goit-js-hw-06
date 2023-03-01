const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("заполни все поля, не будь хрюшей");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }
}
