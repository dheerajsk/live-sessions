
// IIFE - Immediate Invocation Function Expresssion.

(()=>{
    console.log("hello world");
})();

((a, b)=>{
    // api
    // call db
    // call fs
    console.log("Hello world", a+b);
})(2, 3);
