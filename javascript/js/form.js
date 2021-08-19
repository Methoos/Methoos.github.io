

function calcAmount() {
    let amountInput = document.querySelector("#order input[name='amount']");
    let amountNumber = parseInt(amountInput.value);
    let price = 1200;
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
    //showSumPrice();
}

function showSumPrice(pricePerProduct=1200, amountNumber=1) {
    //megadott értékek alapértelmezés, ha paraméter nélkül hívnák a fv-t
    amountNumber = amountNumber || 0; //0 lesz, ha nem érkezik paraméter esetleg
    amountNumber < 11 && amountNumber > 0 ?
        document.querySelector("span.show-amount").innerHTML = (pricePerProduct * amountNumber)
        :
        alert("Minimum 1, maximum 10 db! (" + amountNumber + ")");
}

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