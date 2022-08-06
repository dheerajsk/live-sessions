
// Step 1: Find Decreasing Array
    // Find start by decreasing point in array
    // FInd end by end of array or start of next increasing subarray
// Step 2: Reverse Decreasing Array and put in original array
// Step 3: Check if array is sorted or not.

function canArrayBeSorted(array){
    if(array.length==1){
        return true;
    }
    // Step 1: Find Decreasing Array
    
    let startIndex;
     // 1.1 find start index
    for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
            startIndex=i;
            break;
        }
    }
    // 1.2 find end index
    let endIndex;
    for(let i=startIndex; i<array.length; i++){
        if(array[i]<array[i+1] || i==array.length-1){
            endIndex=i;
            break;
        }
    }

    // 1.3 Create decreasing array

    let decreasingArray=[];
    let j=0;
    for(let i=startIndex; i<=endIndex; i++){
        decreasingArray[j]=array[i];
        j++;
    }
    // console.log("Decreasing Array: ", decreasingArray)

    // Step 2: Reversing subarray and put values into main array
    // [5,4,3]
    for(let i=decreasingArray.length-1; i>=0; i--){
        array[startIndex]=decreasingArray[i];
        startIndex++;
    }
    console.log("Main Array After Reverse:", array);

    // Step 3: Check if sorted or not.
    for(let i=0; i<array.length-1; i++){
        if(array[i]>array[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
    
}

// canArrayBeSorted([1,2,5,4,3]) // true
canArrayBeSorted([1,2,5,4,3,7,8,9,12,11,10]);
    // 
// canArrayBeSorted([1,2,4,5,3]) // false