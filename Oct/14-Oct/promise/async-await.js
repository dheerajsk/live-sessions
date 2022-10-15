
// Import
const verifyCardModule = require("./verifyCard");

async function placeOrder(){

    // wait for this to finish before executing next statements.
    try{
        const result = await verifyCardModule.verify(2021);
        console.log(result);    
    }catch(err){
        console.log(err);
        return;
    }
    deductAmount();
}



function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder();