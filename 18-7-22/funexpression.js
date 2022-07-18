
// Function Expression.

// Functions in JS:
    // 1. Functions play a very imp role in JS.
    // 2. There are no of ways to work with functions.
    // 3. Functions can be passed as parameter.
    // 4. Function is also a datatype in JS.

// create a function. => Function Expression.
const add = function(a,b){
    console.log(a+b);
}

const sub = function(a,b){
    console.log(a-b);
}


calc(add); // 30
calc(sub); // -10

function calc(func){
    func(10,20);
}
