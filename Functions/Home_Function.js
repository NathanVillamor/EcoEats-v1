// NAV ONSCROLL BG
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector("nav").style.backgroundColor = "#b6cf29";
        document.querySelector("nav").style.boxShadow = "-3px 3px 22px -8px rgba(0,0,0,0.69)";
        document.getElementById("navSignup").setAttribute("class", "nav-button-scroll");
        document.getElementById("navLogin").setAttribute("class", "nav-button-scroll");
        document.getElementById("navSignup").style.width = "6rem";
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


document.getElementById("categoryButton1").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "flex";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "none";

    document.getElementById("categoryButton1").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton2").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "flex";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "none";

    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton3").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "flex";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "none";
    
    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton4").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "flex";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "none";
    
    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton5").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "flex";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "none";
    
    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton6").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "flex";
    document.querySelector(".menu-juice").style.display = "none";
    
    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button-active");
    document.getElementById("categoryButton7").setAttribute("class", "category-button");
}
document.getElementById("categoryButton7").onclick = function () {
    document.querySelector(".menu-pasta").style.display = "none";
    document.querySelector(".menu-burger").style.display = "none";
    document.querySelector(".menu-sandwich").style.display = "none";
    document.querySelector(".menu-chicken").style.display = "none";
    document.querySelector(".menu-pork").style.display = "none";
    document.querySelector(".menu-dessert").style.display = "none";
    document.querySelector(".menu-juice").style.display = "flex";
    
    document.getElementById("categoryButton1").setAttribute("class", "category-button");
    document.getElementById("categoryButton2").setAttribute("class", "category-button");
    document.getElementById("categoryButton3").setAttribute("class", "category-button");
    document.getElementById("categoryButton4").setAttribute("class", "category-button");
    document.getElementById("categoryButton5").setAttribute("class", "category-button");
    document.getElementById("categoryButton6").setAttribute("class", "category-button");
    document.getElementById("categoryButton7").setAttribute("class", "category-button-active");
}

let prevVal = 3;
let nextVal = -3;
let totalSlide = 0;

let foodCardContainer = document.querySelectorAll("#foodCardContainer");


document.getElementById("prev").onclick = function () {
    nextVal = nextVal + -15;
    for (let i = 0; i < foodCardContainer.length; i++) {
        foodCardContainer[i].style.right = (nextVal + "rem");
    }
    totalSlide++;
    document.getElementById("next").disabled = false;

    if(totalSlide == 10) {
        document.getElementById("prev").disabled = true;
    }
    else {
        document.getElementById("prev").disabled = false;
    }
}
document.getElementById("next").onclick = function () {
    nextVal = nextVal + 15;
    for (let i = 0; i < foodCardContainer.length; i++) {
        foodCardContainer[i].style.right = (nextVal + "rem");
    }
    totalSlide--;
    document.getElementById("prev").disabled = false;
    
    if(totalSlide == -1) {
        document.getElementById("next").disabled = true;
    }
    else {
        document.getElementById("next").disabled = false;
    }
}

let homeToCart = document.querySelectorAll("#toCart");

for (let index = 0; index < homeToCart.length; index++) {
    homeToCart[index].onclick = function() {
        window.location.href = "Login.html";
    }
}


document.getElementById("orderNow").onclick = function() {
    window.location.href = "Login.html";
}

document.getElementById("navSignup").onclick = function() {
    window.location.href = "Login.html";
}
