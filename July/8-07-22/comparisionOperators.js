console.log("This is Comparision Operators file.");

// ==, === : Checks if equal
// <, >, <=, >=

// What is it and why it is needed.

// email

var x=20;
var y=20;
// console.log(x==y); // true/false

y="20";
console.log(x==y); // true/false ? true. 20=="20"
console.log(x===y); // false
// ==  => only checks for equality of values.
// ===  => checks for equality of values as well as type.

var p=10;
var q=100;
console.log(p<q); // true
console.log(p>q); // false
console.log("Greater/Less than euqal to");
console.log(p<=q) ; // true
console.log(q>=p) // true

var x = [];
var y = [];
console.log(typeof x);
console.log(typeof y);

console.log(x==y); // false because objects comparision will always be false 
