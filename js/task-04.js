const btnDecrement = document.querySelector('[data-action ="decrement"]');
const valueEl = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action ="increment"]');
let counterValue = 0;

const onValueDecrement = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onValueIncrement = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

btnDecrement.addEventListener("click", onValueDecrement);
btnIncrement.addEventListener("click", onValueIncrement);
