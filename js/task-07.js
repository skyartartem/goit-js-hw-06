document
  .getElementById("font-size-control")
  .addEventListener("input", handlerValueSize);

// document.getElementById("text").style.fontSize =
//   document.getElementById("font-size-control").value + "px";

function handlerValueSize(event) {
  const defTextSize = 16;
  const midlRange = 56;
  const coef = defTextSize / midlRange;
  const size = coef * event.currentTarget.value;

  document.getElementById("text").style.fontSize = `${size}px`;
}
