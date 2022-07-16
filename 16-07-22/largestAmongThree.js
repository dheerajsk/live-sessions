
function findLargest(a, b, c){

    if(a>b && a>c){
        console.log(a+" a is largest");
    }else if(b>a && b>c){
        console.log(b+ " is largest");
    }else{
        console.log(c+ " is largest");
    }
}

findLargest(10, 32, 14); // 32
findLargest(90, 32, 43); // 90
findLargest(9, 2, 43); // 43