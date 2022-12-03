const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
        alert("всі поля повинні бути заповнені");
        return
    }
    
    const formData = {email, password};
    
    console.dir(formData);
    
    formEl.reset();
}
