
const upiVerfication = require("./upiVerfication");

function placeOrder(){
    console.log("Placing Order...");
}

function validatePaymentSystem(){
    upiVerfication.verify("xyz@okicici", deductMoney);
}

function deductMoney(){
    console.log("Deducting money");
}

placeOrder();
// assigned to nodejs
validatePaymentSystem();
// MT
// deductMoney();

// 1. Callback.