
// 5
// 5
// 9

function findSingleDigitSum(num){ // 10
    // 1. Convert number to string.
    // => Because you can't find length/travers a number
    const numStr = num.toString();
    if(numStr.length==1){
        return numStr;
    }
    let sum=0;
    // 2. Sum all digits of the number.
    for(i=0; i<numStr.length; i++){
        sum+=Number(numStr[i]);
    }
    if(sum>9){ // 10
        findSingleDigitSum(sum); // 10
    }else{
        console.log(sum);
    }
}

findSingleDigitSum(12345);