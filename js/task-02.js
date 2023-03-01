const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1-----------------------
// const ulEl = document.querySelector("#ingredients");
// const arrayLi = [];

// const createLi = (ingredients) => {
//   ingredients.map((ingredient) => {
//     const liEl = document.createElement("li");
//     liEl.textContent = ingredient;
//     liEl.classList.add("item");
//     ulEl.append(liEl);
//   });
// };

// // console.log(arrayLi);

// // ulEl.append(...arrayLi);

// console.log(createLi(ingredients));

// 2-------------------
const ulEl = document.querySelector("#ingredients");
const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});

ulEl.append(...elements);
