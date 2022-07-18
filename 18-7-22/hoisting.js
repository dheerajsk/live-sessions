// Hoisting => calling a function before it is created.

add(10,20);

const add = function(a,b){
  
    console.log(a+b);
}

let x=10; //