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

// Inpus
let signupEmail = document.getElementById("signup-email").value;
let signupPassword = document.getElementById("signup-password").value;
let signupConfirm = document.getElementById("signup-confirm").value;

let loginEmail = document.getElementById("login-email").value;
let loginPassword = document.getElementById("login-password").value;

let signupEmailContainer = [];
let signupPasswordContainer = [];

signUpBtn.onclick = function() {

    

}