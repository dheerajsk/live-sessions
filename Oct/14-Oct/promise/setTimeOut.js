
// Import
const verifyCardModule = require("./verifyCard");

function placeOrder(){
    // 1. verify card
    const promise = verifyCardModule.verify(2022);

    // waiting. for promise to complete
    promise.then(
        // when promise is fullfilled
        (msg)=>{
                console.log(msg);
                throw new Error("Error inside then fulfilled callback");
                deductAmount();
            },
        // when promise is rejected
        (err)=>{
            console.log("Error handling inside then")
            console.log(err);
        }
    
    ).catch(err=>{
        console.log("Error handling in catch function")
        console.log(err);
    });
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder();