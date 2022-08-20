

function add(){
    var x = function (){
        console.log(10);
        return ;
    };
    return x();
}

// 10
// undefined


const result = add();
console.log(result);  // what it will print. ?