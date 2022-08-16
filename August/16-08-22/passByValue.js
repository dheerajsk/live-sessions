
function passByValue(value){
    // it will create new address and add value there
    // becaus it gets value n pramater, not address
    return (value+10);
}

const num = "99"; 
console.log("Num before passing to function", num);
// we are passing value not address
const result = passByValue(num);
console.log("Result ",result);
// num is not updated because address was not passed.
console.log("Num after passing to function", num);