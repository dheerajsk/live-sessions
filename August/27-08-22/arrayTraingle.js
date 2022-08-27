

function printArrayTraignle(array){
    // 2. Base condition.
    if(array.length==1){
        console.log(array);
        return;
    }

    // 3. Reduce size of array with sum.
    for(let i=0; i<array.length-1; i++){
        var reducedArray=[];
        reducedArray[i]=array[i]+array[i+1];
    }
    printArrayTraignle(reducedArray);
    console.log(array);

}

const arr = [1,2,3,4,5];

// 1. Starting point.
printArrayTraignle(arr);