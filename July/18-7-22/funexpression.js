
// Function Expression.

// Functions in JS:
    // 1. Functions play a very imp role in JS.
    // 2. There are no of ways to work with functions.
    // 3. Functions can be passed as parameter.
    // 4. Function is also a datatype in JS.

// create a function. => Function Expression.
// x67019 => memory address.
const add = function(a,b){
    console.log(a+b);
}
add();

const sub = function(a,b){
    console.log(a-b);
}


function calculator(avnish){
    avnish(10,20);
}

calculator(add); // 30
calculator(sub); // -10

