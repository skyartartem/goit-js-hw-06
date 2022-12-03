const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", changeBorderColor);

function changeBorderColor(event) {
    if (this.value.length === 6) {
        if (this.classList.contains("invalid")) {
            this.classList.remove("invalid");
        } this.classList.add("valid");
        // console.log("green");
    }
    else {
         if (this.classList.contains("valid")) {
           this.classList.remove("valid");
         }
        this.classList.add("invalid");
        // console.log("red");
    }
}

