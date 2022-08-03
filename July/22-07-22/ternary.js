
function IsOddOrEven(num){

    // Modular operator %
    // if(num%2==0){
    //     return "Even";
    // }else{
    //     return "Odd";
    // }
    // Using ternary operator.
    // <ConditionalExpression> ? resultIfExpressionIsTrue : resultIfExpressionISFalse.
    return num%2==0 ? "Even" : "Odd";
}

console.log(IsOddOrEven(10));
console.log(IsOddOrEven(103));
console.log(IsOddOrEven(108));