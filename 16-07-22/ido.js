

function checkOrder(a, b, c){
    // 12, 45, 87 => i
    // 90, 32, 21 => d
    // 4, 9, 1 => none.
    if(a<b && b<c){
        console.log("Increasing Order");
    }
    else if(a>b && b>c){
        console.log("Decreasing order");
    }else{
        console.log("No order");
    }
}
checkOrder(12, 45, 87);
checkOrder(90, 32, 21);
checkOrder(4, 9, 1);