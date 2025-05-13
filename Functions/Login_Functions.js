// FORM DIVIDER FUNCTIONALITY
document.getElementById("toSignupForm").onclick = function () {
    document.getElementById("form-block").style.left = "50%";
    document.querySelector(".to-login").style.display = "none";
    document.querySelector(".to-signup").style.display = "flex";
}

document.getElementById("toLoginForm").onclick = function () {
    document.getElementById("form-block").style.left = 0;
    document.querySelector(".to-login").style.display = "flex";
    document.querySelector(".to-signup").style.display = "none";
}

// FORM FUNCTIONALITY
// Buttons
let signUpBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");

// Inputs
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let signupConfirm = document.getElementById("signup-confirm");
let checkBox = document.getElementById("terms-conditions")
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");

let passwordMatch = false;
let emailValid = false;

let signupEmailContainer = [];
let signupPasswordContainer = [];

signUpBtn.onclick = function() {
    signupIntervalTime();
    signupCounter = 30;
}

loginBtn.onclick = function() {
    loginIntervalTime();
    loginCounter = 30;
}

let signupInterval;
let signupCounter = 30; 

function signupIntervalTime() {
    signupInterval =setInterval(() => {
        
        if(signupCounter > 0) {

            if (signupPassword.value !== signupConfirm.value) {
                document.getElementById("no-match").style.display = "flex";
                signupCounter--;
            }
            else if (!emailPattern.test(signupEmail.value)) {
                
                document.getElementById("bad-email").style.display = "flex";
                signupCounter--;
            }
            else {
                document.getElementById("account-created").style.display = "flex";
                signupCounter--;
                
                signupEmailContainer.push(signupEmail.value);
                signupPasswordContainer.push(signupPassword.value);
                
                passwordMatch = true;
                emailValid = true;
            }
            
        }
        else {
            document.getElementById("wrong-info").style.display = "none";
            document.getElementById("account-created").style.display = "none";
            document.getElementById("no-match").style.display = "none";
            document.getElementById("bad-email").style.display = "none";

            clearInterval(signupInterval);
        }

    }, 100);
}

let loginInterval;
let loginCounter = 30; 

function loginIntervalTime() {
    loginInterval =setInterval(() => {
        
        if(loginCounter > 0) {

            if (!signupEmailContainer.includes(loginEmail.value)) {
                document.getElementById("wrong-info").style.display = "flex";
                loginCounter--;
            }
            else if (!signupPasswordContainer.includes(loginPassword.value)) {
                document.getElementById("wrong-info").style.display = "flex";
                loginCounter--;
            }
            else {
                window.location.href = "Dashboard.html";
            }
            
        }
        else {
            document.getElementById("wrong-info").style.display = "none";

            clearInterval(loginInterval);
        }

    }, 100);
}

document.getElementById("ecoEatLogo").onclick = function() {
    window.location.href = "Home.html";
}