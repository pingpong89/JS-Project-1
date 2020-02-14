let email = document.getElementById("email2");
let password = document.getElementById("password2");
let formBegin = document.getElementById("form-begin2");

// Ensure all fields have been input
export const validateLogIn = () => {
    let missingData = false;
    let emailTest = email.value;
    let passwordTest = password.value;
    if(emailTest === "" || passwordTest === ""){
        formBegin.insertAdjacentHTML('beforebegin', `<p class="text-danger" ID="missing-fields">Missing fields.</p>`);
        return false;
    }else{
        return true;
    }
}

// Check credentials against stored credentials
export const checkCredentials = () => {
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');
    if(email.value != storedEmail || password.value != storedPassword){
         formBegin.insertAdjacentHTML('beforebegin', `<p class="text-danger" ID="bad-credentials">Username or password do not match existing records.</p>`);
         return false;
    } else {
        return true;
    }
}

// Remove all error messages
export const clearErrors = () => {
    let badCredentials = document.getElementById("bad-credentials");
    let missingFields = document.getElementById("missing-fields");
    if(badCredentials !== null){
        badCredentials.parentNode.removeChild(badCredentials);
    } 
    if(missingFields !== null){
        missingFields.parentNode.removeChild(missingFields);
    }

}