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