const inputFontSizeControl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text")
inputFontSizeControl.addEventListener("input", resizeFont);

// console.dir(spanEl)

function resizeFont(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
    // console.log(event.currentTarget.value);
    // console.log(this.value);
    
}