

function findMedian(array){
    let mid = parseInt((array.length-1)/2);

    // 1. if array length is even, (mid+mid+1)/2 is median.
    if(array.length%2==0){
        return (array[mid]+array[mid+1])/2;
    }

    // 2. if array length is odd, mid is median.
    else{
        return array[mid];
    }
}


function mergeSort(array, left , mid, right){
    // 1. To Divide the array based on pointers.
    // create left and right array.

    let leftArrayLength = mid-left+1;
    let rightArrayLength = right-mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray=new Array(rightArrayLength);

    for(let i=0; i<leftArrayLength; i++){
        leftArray[i]=array[left+i];
    }
    for(let j=0; j<rightArrayLength; j++){
        rightArray[j]=array[mid+1+j]
    }

    // 2. Merge Part
    let i=0;
    let j=0;
    let k = left;
    while(i<leftArrayLength && j<rightArrayLength){
        if(leftArray[i]<rightArray[j]){
            array[k]=leftArray[i];
            i++;
        }else{
            array[k]=rightArray[j];
            j++;
        }
        k++;
    }
    // copy remaining elements from both array.
    while(i<leftArrayLength){
        array[k]=leftArray[i];
        i++;
        k++;
    }
    while(j<rightArrayLength){
        array[k]=rightArray[j];
        k++;
        j++;
    }

}

// Just giving pointers to divide, and then merge later.
function preMergeSort(array, left, right){
    // Stop Recursion
    if(left>=right){
        return;
    }

    // Step 1: Find mid element
    let mid = parseInt((left+right)/2);
    // to create left array
    preMergeSort(array, left, mid);
    // to create right array/.
    preMergeSort(array, mid+1, right);
    mergeSort(array, left, mid, right);

}

const array = [11, 12, 25, 26, 38];
const array2 = [2, 23, 17, 20, 45];
const finalArray = [...array, ...array2];
preMergeSort(finalArray, 0, finalArray.length-1);
console.log(finalArray);
console.log(findMedian(finalArray));