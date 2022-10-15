
// Import
const verifyCardModule = require("./verifyCard");

async function placeOrder(){

    // wait for this to finish before executing next statements.
    try{
        const result = await verifyCardModule.verify(2022);
        console.log(result);   
        deductAmount(); 
        // throw new Error("Error after promise is resolved");
    }catch(err){
        console.log(err);
        return;
    }
}



function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder();