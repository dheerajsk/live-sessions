// Understanding Closure.

// 1. Learning about Scope.
    // 1.1 When x will start occupuong memory ?
        // As soon as add funciton invokes.
    // 1.2 How long x will remain in memory ?
        // Untill function completes its execution.
 
// 2. Using Inner functions.     
    // 2.1 There is a difference in creating and invoking a function.

const add = function(){
    var x = 10; // when add is called.
    console.log(x); // 10
    return function add2(){
        var y = 20;
        console.log(x+y);
    }
}

const result = add();
// x will be destroyed.


result();
