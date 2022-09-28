

function quickSelect(arr, k){

    partition(arr, 0, arr.length-1);
}

function partition(array, low, high){

    let start = low;
    let end = high;

    const mid = Math.floor((start+end)/2);
    const pivot = array[mid];
    if(mid==k-1){
        console.log("kth element is: "+array[mid]);
        return;
    }
    if(start>=end){
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
        // check if pivot is k
        if(mid>k-1){
            partition(array, low, end);
        }else{
            partition(array, start, high);
        }
    }
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}


const arr = [4, 3, 7, 11, 20, 19, 13];
let k = 3;
quickSelect(arr, k);