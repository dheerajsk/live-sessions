

// function passByReference(array, value){
//     array.push(value);
// }

// const arr = [2,3,4];
// passByReference(arr, 5);
// console.log(arr);
// console.log(typeof arr);

function checkForObject(obj){
    obj.age = 25;
}

const obj = {name:"X", age:20};
let obj2 = {};
// assigns a new copy with new memoery address to target.
obj2 =obj;
obj2.age = 25;
console.log(obj);
console.log(obj2);

// var x = 10;
// var y=x;
// y=20;
// console.log(x);



// Object => Objects in JavaScript are of reference type.
// nums, strings, bools are of value type.