function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const inputRef = document.getElementById("controls").firstElementChild;
const containerRef = document.getElementById("boxes");

buttonCreateRef.addEventListener("click", addBoxes);

buttonDestroyRef.addEventListener("click", deleteBoxes);

function addBoxes(event) {
  createBoxes(inputRef.value);
}

function createBoxes(amount) {
  let markUp = [];
  for (let i = 0; i < amount; i += 1) {
    markUp.push(makeMarkup(i));
  }
  markUp = markUp.join("");
  console.log(markUp);
  containerRef.innerHTML = "";
  containerRef.insertAdjacentHTML("beforeend", markUp);
}

const makeMarkup = (number) => {
  const width = 30 + number * 20;
  return `
  <div style="background-color:${getRandomHexColor()};
  height: ${width}px;
  width: ${width}px;">
  </div> `;
};

function deleteBoxes() {
  containerRef.innerHTML = "";
}
