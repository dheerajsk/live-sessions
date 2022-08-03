
function findMinMax(array){
    let min=Number.MAX_VALUE;
    let max=Number.MIN_VALUE;
    for(let i=0; i<array.length; i++){
        // for updating min element
        if(array[i]<min){
            min=array[i];
        }
        // for updating max element.
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log("Min: "+min);
    console.log("Max: "+max);
}
findMinMax([3,2,1,8]);
console.log(Number.MAX_VALUE);