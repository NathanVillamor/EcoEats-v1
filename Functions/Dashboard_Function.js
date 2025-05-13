// BUTTON FUNCTIONALITIES
document.getElementById("navCartBtn").onclick = function() {
    document.getElementById("cartContainer").style.right = "0";
}

document.getElementById("cartExit").onclick = function() {
    document.getElementById("cartContainer").style.right = "-35rem";
}

document.getElementById("navProfileBtn").onclick = function() {
    document.getElementById("profileContainer").style.right = "0";
}

document.getElementById("profileExit").onclick = function() {
    document.getElementById("profileContainer").style.right = "-35rem";
}

document.getElementById("navReceiptBtn").onclick = function() {
    document.getElementById("receiptContainer").style.right = "0";
}

document.getElementById("receiptExit").onclick = function() {
    document.getElementById("receiptContainer").style.right = "-35rem";
}

// SEARCH BAR FUNCTIONALITIES 

// for (let index = 0; index < foodTitleContainer.length; index++) {
//     foodCardContainer[index].id = foodTitleContainer.innerHTML;
// }

// let foodTitleArray = [];
let searchbar = document.getElementById("searchBar");
// for (let index = 0; index < foodTitleContainer.length; index++) {
//     foodTitleArray.push(foodTitleContainer[index].innerHTML);
// }

// searchbar.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase();
    
// })

searchbar.addEventListener("keypress", function(e) {

    if (e.key == "Enter") {
        for (let index = 0; index < foodTitleContainer.length; index++) {
            let match = searchbar.value.toLowerCase()
            if (foodTitleContainer[index] == match) {
                document.querySelector(match).scrollIntoView();
            }
        }
    }

})






// TO CART FUNCTIONALITY
let itemPriceContainer = document.querySelectorAll("#item-price");
let calorieContainer = document.querySelectorAll("#food-calorie");
let proteinContainer = document.querySelectorAll("#food-protein");
let foodTitleContainer = document.querySelectorAll("#food-title");
let foodCardContainer = document.querySelectorAll(".food-card");
let foodCardImg = document.querySelectorAll(".food-card-img");

let basketItemContainer = document.querySelectorAll(".basket-item");
let basketImgContainer = document.querySelectorAll("#basket-img");
let basketTitleContainer = document.querySelectorAll("#basket-food-title")
let basketCaloriesContainer = document.querySelectorAll("#basket-calories");
let basketProteinContainer = document.querySelectorAll("#basket-protein");
let basketPriceContainer = document.querySelectorAll("#basket-price");
let itemQuantityContainer = document.querySelectorAll("#item-quantity");

let increaseContainer = document.querySelectorAll("#increase");
let decreaseContainer = document.querySelectorAll("#decrease");

let addToCartBtn = document.querySelectorAll("#toCart");

let basketInterval;
let basketCounter = 30;

// ITEM QUANTITY FUNCTIONALITY
function increase(itemQuantity) {
    itemQuantity.value++;
}
function decrease(itemQuantity) {
    itemQuantity.value--;
}
function basketInvervalTime() {
    basketInterval = setInterval(() => {

        if (basketCounter > 0) {
            document.getElementById("added-to-cart").style.display = "flex";
            basketCounter--;
        } else {
            document.getElementById("added-to-cart").style.display = "none";
            clearInterval(basketInvervalTime);
        }

    }, 100);
}

for (let i = 0 ; i < addToCartBtn.length ; i++) {
    addToCartBtn[i].onclick = function() {
        addToCart(itemPriceContainer[i], basketPriceContainer[i], calorieContainer[i], basketCaloriesContainer[i], proteinContainer[i], basketProteinContainer[i], foodTitleContainer[i], basketTitleContainer[i], foodCardImg[i], basketImgContainer[i], basketItemContainer[i], increaseContainer[i], decreaseContainer[i], itemQuantityContainer[i]);
        subtotalSum();
        subtotal = 0;
    }

}

function itemTotal(quantity, price, container) {
    container.innerHTML = quantity.value * Number(price.innerHTML);
}

function addToCart (itemPrice, basketPrice, menuCalorie, basketCalorie, menuProtein, basketProtein, menuTitle, basketTitle, menuImage, basketImage, basketContainer, increaseBtn, decreaseBtn, itemQuantity) {

    basketInvervalTime();
    basketCounter = 30;

    itemQuantity.value = 1;
    itemTotal(itemQuantity, itemPrice, basketPrice);
    
    basketContainer.style.display = "flex";
    
    increaseBtn.onclick = function() {
        increase(itemQuantity);
        itemTotal(itemQuantity, itemPrice, basketPrice);
        subtotalSum();
        subtotal = 0;
    }

    decreaseBtn.onclick = function() {
        decrease(itemQuantity);
        if (itemQuantity.value <= 0) {
            basketContainer.style.display = "none";
        }
        itemTotal(itemQuantity, itemPrice, basketPrice);
        subtotalMinus();
        subtotal = 0;
    }

    document.getElementById("receipt-subtotal").innerHTML = subtotalContainer.innerHTML;
    document.getElementById("receipt-fee").innerHTML = feeContainer.innerHTML;
    document.getElementById("receipt-total").innerHTML = totalContainer.innerHTML;

    let receiptItemContainer = document.querySelectorAll("#receipt-item");
    for (let i = 0; i < basketTitle.length; i++) {
        receiptTitleList[i].innerHTML = basketTitle.innerHTML;
    }

    
    basketCalorie.innerHTML = menuCalorie.innerHTML + "kCal";
    basketProtein.innerHTML = menuProtein.innerHTML + "Protein";
    basketTitle.innerHTML = menuTitle.innerHTML;

    let parentBackground = window.getComputedStyle(menuImage).backgroundImage;
    basketImage.style.backgroundImage = parentBackground;
    
}
let receiptTitleList = document.querySelectorAll("#receipt-item-tltle");

function subtotalSum() {
    for (let index = 0; index < basketPriceContainer.length; index++) {
        subtotal = subtotal + Number(basketPriceContainer[index].innerHTML);
        subtotalContainer.innerHTML = subtotal;
        feeContainer.innerHTML = Math.floor(0.05 * Number(subtotalContainer.innerHTML));
        totalContainer.innerHTML = Number(feeContainer.innerHTML) + Number(subtotalContainer.innerHTML);
        document.getElementById("receipt-subtotal").innerHTML = subtotalContainer.innerHTML;
        document.getElementById("receipt-fee").innerHTML = feeContainer.innerHTML;
        document.getElementById("receipt-total").innerHTML = totalContainer.innerHTML;

    }
}

function subtotalMinus() {
    for (let index = 0; index < basketPriceContainer.length; index++) {
        subtotal = subtotal - Number(basketPriceContainer[index].innerHTML);
        subtotalContainer.innerHTML = Math.abs(subtotal);
        feeContainer.innerHTML = Math.floor(0.05 * Number(subtotalContainer.innerHTML));
        totalContainer.innerHTML = Number(feeContainer.innerHTML) + Number(subtotalContainer.innerHTML);
        document.getElementById("receipt-subtotal").innerHTML = subtotalContainer.innerHTML;
        document.getElementById("receipt-fee").innerHTML = feeContainer.innerHTML;
        document.getElementById("receipt-total").innerHTML = totalContainer.innerHTML;

    }
}

let subtotalContainer = document.getElementById("subtotalAmount");
let feeContainer = document.getElementById("feeAmount");
let totalContainer = document.getElementById("totalAmount");
let receiptOrderContainer = document.querySelectorAll(".receipt-order");
let completeOrderBtnContainer = document.querySelectorAll("#complete-order");
let viewOrderBtnContainer = document.querySelectorAll("#view-order");
let receiptCount = 0;

let subtotal = 0;
let feetotal = 0;

for (let index = 0; index < receiptOrderContainer.length; index++) {
    
    viewOrderBtnContainer[index].onclick = function() {
        document.getElementById("receipt-pop").style.display = "flex";
    }
    
    completeOrderBtnContainer[index].onclick = function() {
        document.getElementById("receipt-order").display = "none";
    }


}
document.getElementById("exitReceipt").onclick = function() {
    document.getElementById("receipt-pop").style.display = "none";
}








// MOP FUNCTIONS 
let cashBtn = document.getElementById("cash-mop");
let cardBtn = document.getElementById("card-mop");
let ewalletBtn = document.getElementById("ewallet-mop");

let cashFlag = false;
let cardFlag = false; 
let ewalletFlag = false;

cashBtn.onclick = function() {
    cashBtn.setAttribute("class", "mop-active");
    cardBtn.setAttribute("class", "normal-mop");    
    ewalletBtn.setAttribute("class", "normal-mop");

    cashFlag = true;
    cardFlag = false;
    ewalletFlag = false;

    orderBtn.onclick = function() {
        orderIntervalTime();
        orderTime = 30;
        for (let index = 0; index < basketItemContainer.length; index++) {
            basketItemContainer[index].style.display = "none";
            receiptOrderContainer[receiptCount].style.display = "block";
            
            document.getElementById("receipt-pop").style.display = "flex";
    
            subtotalContainer.innerHTML = 0;
            feeContainer.innerHTML = 0;
            totalContainer.innerHTML = 0;
            
        }
        receiptCount++;
    }
}
cardBtn.onclick = function() {
    cashBtn.setAttribute("class", "normal-mop");
    cardBtn.setAttribute("class", "mop-active");    
    ewalletBtn.setAttribute("class", "normal-mop");

    cashFlag = false;
    cardFlag = true;
    ewalletFlag = false;
    
    orderBtn.onclick = function() {
        orderIntervalTime();
        orderTime = 30;
        for (let index = 0; index < basketItemContainer.length; index++) {
            basketItemContainer[index].style.display = "none";
            receiptOrderContainer[receiptCount].style.display = "block";
            
            document.getElementById("receipt-pop").style.display = "flex";
    
            subtotalContainer.innerHTML = 0;
            feeContainer.innerHTML = 0;
            totalContainer.innerHTML = 0;
            
        }
        receiptCount++;
    }
}
ewalletBtn.onclick = function() {
    cashBtn.setAttribute("class", "normal-mop");
    cardBtn.setAttribute("class", "normal-mop");    
    ewalletBtn.setAttribute("class", "mop-active");

    cashFlag = false;
    cardFlag = false;
    ewalletFlag = true;

    orderBtn.onclick = function() {
        orderIntervalTime();
        orderTime = 30;
        for (let index = 0; index < basketItemContainer.length; index++) {
            basketItemContainer[index].style.display = "none";
            receiptOrderContainer[receiptCount].style.display = "block";
            
            document.getElementById("receipt-pop").style.display = "flex";
            subtotalContainer.innerHTML = 0;
            feeContainer.innerHTML = 0;
            totalContainer.innerHTML = 0;
            
        }
        receiptCount++;
    }
}



// ORDER NOW FUNCTION 
let orderBtn = document.getElementById("orderNowBtn");

let orderInterval; 
let orderTime = 30;

function orderIntervalTime() {
    orderInterval = setInterval(() => {
        
        if (orderTime > 0) {
            if(cashFlag == true && subtotal.innerHTML !== "0") {
                document.getElementById("payment-cash").style.display = "flex";
                document.getElementById("payment-card").style.display = "none";
                document.getElementById("payment-ewallet").style.display = "none";

                orderTime--;
            }
            else if (cardFlag == true && subtotal.innerHTML !== "0") {
                document.getElementById("payment-cash").style.display = "none";
                document.getElementById("payment-card").style.display = "flex";
                document.getElementById("payment-ewallet").style.display = "none";
            
                orderTime--;
            } 
            else if (ewalletFlag == true && subtotal.innerHTML !== "0") {
                document.getElementById("payment-cash").style.display = "none";
                document.getElementById("payment-card").style.display = "none";
                document.getElementById("payment-ewallet").style.display = "flex";
                
                orderTime--;
            } 
            else if (!ewalletFlag && !cardFlag && !cashFlag) {
                document.getElementById("no-mop").style.display = "flex";
                orderTime--;
            }
            else if (subtotalContainer.innerHTML == "0") {
                document.getElementById("no-items").style.display = "flex";
                orderTime--;
            }
        }
        else {
            document.getElementById("no-items").style.display = "none";
            document.getElementById("no-mop").style.display = "none";
            document.getElementById("payment-cash").style.display = "none";
            document.getElementById("payment-card").style.display = "none";
            document.getElementById("payment-ewallet").style.display = "none";

            clearInterval(orderIntervalTime);
        }

    }, 100);
}