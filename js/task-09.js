function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

// console.log(spanRef);

buttonRef.addEventListener("click", changeColor);


function changeColor(event) {
  const randomeHex = getRandomHexColor();
  // console.log(randomeHex);
  // console.log(spanRef.textContent);
  spanRef.textContent = randomeHex;
  bodyRef.style.backgroundColor = `${randomeHex}`;
}