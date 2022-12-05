const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formElements = event.currentTarget.elements;
    // const email = formElements.email.value;
    // const password = formElements.password.value;

    const {
      elements: {
        email: { value: email },
        password: { value: password },
      },
    } = event.currentTarget;

    if (!email || !password) {
        
        return alert("всі поля повинні бути заповнені");
    }
    
    const formData = {email, password};
    
    console.dir(formData);

    formEl.reset();

   }
