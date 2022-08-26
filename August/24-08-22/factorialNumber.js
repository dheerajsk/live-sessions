


function findFactorial(num){
    // base condition.
    if(num<=1){
        return 1;
    }
    return num*findFactorial(num-1);
}

// Start of recursion.
console.log(findFactorial(5));