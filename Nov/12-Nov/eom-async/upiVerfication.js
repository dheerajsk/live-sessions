
module.exports.verify = (upi, cb)=>{
    setTimeout(()=>{
        try{

            // throw new Error("Error while verification");
            console.log("verified");
            cb();
            cb();
        }
        catch(ex){
            cb(ex);
        }
    }, 1000);
}

module.exports.verifyPromise = ()=>{
    // 1. Create a promise which will encapsulate async code.
    const promise = new Promise((resolve, reject)=>{
        //encapsulate async code.
        setTimeout(()=>{
            try{
               
                console.log("Verify upi");
                reject("Error");
            }catch(ex){
                reject("Couldn't verify");
            }
        }, 1000);
    });
    return promise; 
}

