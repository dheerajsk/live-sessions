
// This is a pure function
    // 1. It doesn't depend on any external data.
    // 2. It only depends on arguments passed.
    // 3. It doesnt have any side effects.
function pureAddFunction(a, b){
    return a+b;
}

// This is impure function.
    // 1. it depends on external data.
    // 2. Its behavior might be changed, as sideeffect.
const numC = undefined;

function impureAddFunction(a, b){
    return a+b+numC;
}
console.log(impureAddFunction(10,20));