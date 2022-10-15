
// Infosys.

// it exports the module.

module.exports.verifyCard = (cb)=>{
    setTimeout(()=>{
        // console.log("Card Verified");
        cb(undefined, "card is expired"); 
    }, 1000);
}
