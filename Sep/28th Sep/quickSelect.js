

function quickSelect(arr, k){

    partition(arr, 0, arr.length-1, k);
}

function partition(array, low, high, k){

    let start = low;
    let end = high;

    let mid = Math.floor((start+end)/2);
    const pivot = array[mid];
    if(start>=end){
        console.log("kth element is: "+arr[mid]);
        return;
    }
    while(start<end){
        // move start index
        while(array[start]<pivot){
            start++;
        }
        // move end index
        while(array[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(array, start, end);
            start++;
            end--;
        }
    }
    mid = array.indexOf(pivot);
    if(mid==k-1){
        console.log("kth element is: "+arr[mid]);
        return mid;
    }
        // check if pivot is k
        if(mid>k-1){
            partition(array, low, end, k);
        }else{
            partition(array, start, high, k);
        }
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}


const arr = [15, 13, 0, 17, 9, 12, 4];
const result = quickSelect(arr, 3);