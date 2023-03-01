function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divContainer = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputVal = document.querySelector("#controls input");

divContainer.classList.add("box-container");

btnCreate.addEventListener("click", handleCreate);
btnDestroy.addEventListener("click", handleDestroy);

function createBoxes(amout) {
  let width = 20;
  let height = 20;

  for (let i = 0; i < amout; i++) {
    divContainer.insertAdjacentHTML("afterbegin", '<div class = "box"></div>');
    const newBox = document.querySelector(".box");
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    newBox.style.width = `${(width += 10)}px`;
    newBox.style.height = `${(height += 10)}px`;
  }
}

function handleCreate(event) {
  createBoxes(inputVal.value);
}

function handleDestroy(event) {
  divContainer.innerHTML = "";
}
