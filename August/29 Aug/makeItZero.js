
var steps=0;

function makeItZero(num){
    // Base condition.
    if(num==0){
        console.log(steps);
        return;
    }
    steps=steps+1;
    // 1. Choose largest digit from number.
    // 2. Substract it from main number.
    // 3. Call it again with result from step 2.
    // 43 => "43" => ['4','3']
    let array = num.toString().split('').map(i=> Number(i));
    // spread operator converts array of numbers into individual
    let max = Math.max(...array);
    makeItZero(num-max);
}

// 1. Starting point
makeItZero(43) // 5
// makeItZero(43); // 8

// REST operator=> converts individual values into array/
// SPREAD => extracts individual values from array.

// function sum(...array){
//     console.log(array);
// }

// sum(1,2,3,4);

const array = ["4", "3", "5"];
console.log(array.concat('|'));