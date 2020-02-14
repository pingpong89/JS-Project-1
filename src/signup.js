// DOM variables
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let password = document.getElementById("password");
let formBegin = document.getElementById("form-begin1");
let firstLabel = document.getElementById("first-label");
let lastLabel = document.getElementById("last-label");
let emailLabel = document.getElementById("email-label");
let passwordLabel = document.getElementById("password-label");
let termsLabel = document.getElementById("terms-label");

// Store inputs into local storage
export const storeInput = () => {
    localStorage.setItem('first', firstName.value);
    localStorage.setItem('last', lastName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}

// Add red styling to all fields not present, and prompt at top of form
export const validateSignUp = () =>{
    let missingData = false;
    let firstTest = localStorage.getItem('first');
    let lastTest = localStorage.getItem('last');
    let emailTest = localStorage.getItem('email');
    let passwordTest = localStorage.getItem('password');

    if(firstTest === ""){
        firstLabel.classList.add("text-danger");
        missingData = true;
    } if(lastTest === ""){
        lastLabel.classList.add("text-danger");
        missingData = true;
    } if(emailTest === ""){
        emailLabel.classList.add("text-danger");
        missingData = true;
    } if(passwordTest === ""){
        passwordLabel.classList.add("text-danger");
        missingData = true;
    }if(missingData){
        formBegin.insertAdjacentHTML('afterbegin','<p ID="fix-items" class="text-danger">Please fix missing items</p>');
    }
    return missingData;
}

// Clear previous red styling and prompt
export const clearIncompletes = () =>{
    firstLabel.classList.remove("text-danger");
    lastLabel.classList.remove("text-danger");
    emailLabel.classList.remove("text-danger");
    passwordLabel.classList.remove("text-danger");
    let fixItems = document.getElementById("fix-items");
    if(fixItems !== null){
        fixItems.parentNode.removeChild(fixItems);
    }
}