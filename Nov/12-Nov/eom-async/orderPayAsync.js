
const upiVerfication = require("./upiVerfication");

function placeOrder(){
    console.log("Placing Order...");
}

async function validatePaymentSystem(){
    try{
        const result = await upiVerfication.verifyPromise("xyz@okicici");
        console.log(result);
        deductMoney();
    }catch(ex){
        console.log(ex);
    }
}


function deductMoney(amount, err){
    console.log("Deducting money");
}

placeOrder();
// assigned to nodejs
validatePaymentSystem();
// MT
// deductMoney();

// 1. Callback.
    // Problems.
        // 1. No proper error handling technique.
        // 2. Loss of control over code.
// Callback
// Promise.
// async-await. (then)