
// 1. What is a function ?
    // -> A block of codes to perform a task.
// 2. Why do we use it ?
    // -> 1. Reusability, 2. Modularity.
// 3. How do we use it ?
    // 

// var x = 10;
// var y=20;
// var result = x+y;
// console.log(result);

// How to create a function ?
// circular brackets are used take inputs into function.
// curly brakctes are used to define body of a function.

function addTwoNumbers(x, y){
    var result = x+y;
    // return is used to return output to caller.
    return result;
}

// How to call/execute/invoke a function.
// circular brackets used to pass parameters.
var output = addTwoNumber(10, 20);
console.log(output);
output = addTwoNumbers(20, 40);
console.log(output);
console.log("result is ", addTwoNumbers(0, -40));

