
const upiVerfication = require("./upiVerfication");

function placeOrder(){
    console.log("Placing Order...");
}

// function validatePaymentSystem(){
//     upiVerfication.verify("xyz@okicici", deductMoney);
// }

function validatePaymentSystem(){
    const promise= upiVerfication.verifyPromise("xyz@okicici");
    promise.then(
        // will be called(by Js internally) when promise is resolved.
        ()=>{
            deductMoney();
        },
        // will be called when promise is rejected.
        ()=>{}
    );
}


function deductMoney(amount, err){
    if(err){
        console.log("Error message received");
        console.log(err);
    }else{
        console.log("Deducting money");
    }
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