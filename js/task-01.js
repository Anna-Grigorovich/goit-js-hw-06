const listWithId = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");

const categoryEl = itemList.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${titleEl},
  Elements: ${elements}`);
});
