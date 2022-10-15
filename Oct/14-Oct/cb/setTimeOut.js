
const verifyCardModule = require("./verifyCard");

function placeOrder(){
    // 1. verify card
    verifyCardModule.verifyCard(deductAmount);
    // verifyCardModule.otherTask()l
    // 2. deduct amount
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder();