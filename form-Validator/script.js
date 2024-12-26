function validateForm() {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const password2Error = document.getElementById("password2-error");

    const nameControl = document.getElementById("username").parentElement;
    const emailControl = document.getElementById("email").parentElement;
    const passwordControl = document.getElementById("password").parentElement;
    const password2Control = document.getElementById("password2").parentElement;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    password2Error.textContent = "";

    nameControl.classList.remove("error");
    emailControl.classList.remove("error");
    passwordControl.classList.remove("error");
    password2Control.classList.remove("error");

    let isValid = true;

    if (name.length < 3) {
        nameError.textContent = "Username must be at least 3 characters";
        nameControl.classList.add("error");
        isValid = false;
    }

    if (email === "" || !email.includes("@gmail.com")) {
        emailError.textContent = "Email is not valid";
        emailControl.classList.add("error");
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordControl.classList.add("error");
        isValid = false;
    }
    
    if(password2 === ""){
        password2Error.textContent = "Password2 is required";
        password2Control.classList.add("error");
        isValid = false;
    }    
    return isValid;
}