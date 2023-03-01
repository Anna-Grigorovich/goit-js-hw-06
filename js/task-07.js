const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  let fz = event.currentTarget.value;
  textEl.style.fontSize = `${fz}px`;
  console.dir(event.currentTarget.value);
}
