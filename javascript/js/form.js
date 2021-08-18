

function calcAmount() {
    let amountInput = document.querySelector("#order input[name='amount']");
    let amount = parseInt(amountInput.value);

    if (isNaN(amount)) {
        amount = 0;
    }



    if (amount < 11 && amount > 0) {
        let price = 1200 * amount;
        //alert("Fizetendő: " + price + " Ft");
        let show = document.querySelector("span.show-amount");
        show.innerHTML = price;
    } else (alert("Minimum 1, maximum 10 db! (" + amount + ")"));
}

/**
 * let price=1000;
undefined
let amountInput=document.querySelector("input[name='amount']");
undefined
amountInput
<input type=​"number" name=​"amount" class=​"form-control">
let amount= price *  parseInt(amountInput.value); //3
undefined
amount
3000
 */