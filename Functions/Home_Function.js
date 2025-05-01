// NAV ONSCROLL BG
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector("nav").style.backgroundColor = "#b6cf29";
        document.querySelector("nav").style.boxShadow = "-3px 3px 22px -8px rgba(0,0,0,0.69)";
        document.getElementById("navSignup").setAttribute("class", "nav-button-scroll");
        document.getElementById("navLogin").setAttribute("class", "nav-button-scroll");
    
    }
    else {
        document.querySelector("nav").style.backgroundColor = "transparent";
        document.querySelector("nav").style.boxShadow = "none";
        document.getElementById("navSignup").setAttribute("class", "nav-signup");
        document.getElementById("navLogin").setAttribute("class", "nav-login");
    }
})

document.getElementById("foodSlide1").onclick = function() {
    document.getElementById("heroFoodDisplay").style.backgroundImage  = "url('/Assets/FoodImages/DISHES/CHICKEN\ CACCIATORE.avif')";
    document.getElementById("foodDisplayText").textContent = "Chicken Cacciatore"

    document.getElementById("foodSlide1").setAttribute("class", "active-slide");
    document.getElementById("foodSlide2").setAttribute("class", "food-slide-2");
    document.getElementById("foodSlide3").setAttribute("class", "food-slide-3");

}
document.getElementById("foodSlide2").onclick = function() {
    document.getElementById("heroFoodDisplay").style.backgroundImage = "url('/Assets/FoodImages/DISHES/CHICKEN\ CARB\ PASTA.avif')";
    document.getElementById("foodDisplayText").textContent = "Chicken Carbonara"


    document.getElementById("foodSlide1").setAttribute("class", "food-slide-1");
    document.getElementById("foodSlide2").setAttribute("class", "active-slide");
    document.getElementById("foodSlide3").setAttribute("class", "food-slide-3");


}
document.getElementById("foodSlide3").onclick = function() {
    document.getElementById("heroFoodDisplay").style.backgroundImage = "url('/Assets/FoodImages/DISHES/CHICKEN\ PARM\ PASTA.avif')";
    document.getElementById("foodDisplayText").textContent = "Chicken Parm"


    document.getElementById("foodSlide1").setAttribute("class", "food-slide-1");
    document.getElementById("foodSlide2").setAttribute("class", "food-slide-2");
    document.getElementById("foodSlide3").setAttribute("class", "active-slide");


}