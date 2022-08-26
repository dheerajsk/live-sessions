

function findIfSorted(array, i){
   
    // base condition.
    // 1. check if end of array.
    if(i==array.length-1){
        return true;
    }
    // 2. is next number less than current number
    if(array[i]>array[i+1]){
        return false;
    }

    return findIfSorted(array, i+1);

}
const array = [3,4,2,1];


console.log(findIfSorted(array, 0));