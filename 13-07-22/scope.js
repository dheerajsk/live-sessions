
// Scope of variables.
// variable=> 2 bytes.
// 1 million variables. => 
// this is global scope.
var y=10;
// reference type vs value type

function printMessage(){
    let s="something";

    return x;
    // scope of this var is inside this function
    {
        var x = "Hello"; // function scope.
        let xs = "Hi";
        console.log(y); // Hello
        console.log(y, xs); // Hello
    }
    // console.log(xs); // xs is not defined.
    // 2 secs. 
}

const x = printMessage();
console.log()
// console.log(result); // Hello, not same memory
// console.log(x); //


console.log("30102030");
