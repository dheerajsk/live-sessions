

function quickSort(array, low, high){
    
    let start = low;
    let end = high;
    // base condition
    if(start>=end){
        return;
    }

    let mid = Math.floor((start+end)/2);
    const pivot = array[mid];

    while(start<end){
        while(array[start]<pivot){
            start++;
        }
        while(array[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(array, start, end);
            start++;
            end--;
        }
    }

    // left array
    quickSort(array, low, end);
    // right array
    quickSort(array, start, high);
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}



const array = [22, 43, 12, 8, 90, 32, 67, 21];
quickSort(array, 0, array.length-1);
console.log(array);
