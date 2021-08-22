

function calcAmount() {
    let amountInput = document.querySelector("#order input[name='amount']");
    let amountNumber = parseInt(amountInput.value);
    let price = 1200;
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
    //showSumPrice();
}


function showSumPrice(pricePerProduct = 1200, amountNumber = 1) {
    //megadott értékek alapértelmezés, ha paraméter nélkül hívnák a fv-t
    amountNumber = amountNumber || 0; //0 lesz, ha nem érkezik paraméter esetleg
    amountNumber < 11 && amountNumber > 0 ?
        document.querySelector("span.show-amount").innerHTML = (pricePerProduct * amountNumber)
        :
        alert("Minimum 1, maximum 10 db! (" + amountNumber + ")");
}
//Gyerek hozzáadása elemen belül vagy eltávolítása
let helpText = document.createElement("small");
helpText.innerHTML = "Válassz feltétet!";
helpText.setAttribute("class", "form-text text-muted");

let parent = document.querySelector("div.form-group:first-child");
parent.appendChild(helpText);

parent.removeChild(helpText);

//Window events

let sendButton = document.querySelector("form .btn.btn-success");
/*sendButton.onclick=function(){
    alert("Hello JS");
};*/

//sendButton.onclick=calcAmount; //ilyenkor nem kell a () fv után, mert akkor lefut kattintás előtt
sendButton.addEventListener("click", function () {
    alert("Kiszámolva!");
});

window.addEventListener("resize", function () {
    console.clear();
    console.log(this.innerHeight + " x " + this.innerWidth);
});

//Űrlap események
let orderForm = document.querySelector("#order");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let index = 0; index < inputs.length; index++) {
        values[inputs[index].name] = inputs[index].value;
    }
    calcAmount();

    console.log(values);
});

//Parent element kezelése

let alertCloseButton = document.getElementsByClassName("btn-close");
console.log(alertCloseButton);
alertCloseButton[0].addEventListener("click", function (ev) {
    this.parentElement.style.display = "none";
});

//Select elem feltöltése
function createTopMeals() {
    let tops = ['Szalonna', 'Sajt', 'Kolbász', 'Virsli', 
                'Gomba', 'Hagyma', 'Paprika', 'Tojás'];
    let topInput = document.querySelector("#topInput");

    for (let i = 0; i < tops.length; i++) {
        let option=document.createElement("option");
        option.setAttribute("value", tops[i]);
        option.innerHTML=tops[i];
        topInput.appendChild(option);
    }
};
createTopMeals(); //fv futtatása


/**
 * let price=1000;
undefined
let amountInput=document.querySelector("input[name='amountNumber']");
undefined
amountInput
<input type=​"number" name=​"amountNumber" class=​"form-control">
let amountNumber= price *  parseInt(amountInput.value); //3
undefined
amountNumber
3000
 */