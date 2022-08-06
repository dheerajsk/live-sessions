

function reverseArray(array){
    // please create an empty array so that I can copy elements into it.
    const result = [];
    // create a pointer for empty array so that I can increament it to next positions
    let j=0;
    // run a loop from last position in array to the beginning of array
    for(
        // where to begin.
        let i=array.length-1;
        // where to stop/ how long to go
         i>=0;
        // how to proceed
          i--)
    {
        // copying from original array into result array.
        result[j]=array[i];
        // increament position of j so that we don't overrwrote the elements into same positions
        j++;
    }
    // print result array
    console.log(result);

}

reverseArray([1, 4, 9, 6]);
