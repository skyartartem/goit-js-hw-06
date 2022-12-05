function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", changeColor);

function changeColor(event) {
  spanRef.textContent = bodyRef.style.backgroundColor = getRandomHexColor();
  // або:
  // const randomeHex = getRandomHexColor();
  // spanRef.textContent = randomeHex;
  // bodyRef.style.backgroundColor = `${randomeHex}`;
}
