function secondSmallest(array){
    smallest1 = array[0];
    smallest2 = array[1];
for(let i=0;i<array.length;i++){
    if(smallest1 > array[0]){
        smallest1 = array[0];
    }
}
for(let i=0;i<array.length;i++){

    if( smallest1 == smallest2){
        smallest2 = array[i];
    }
}

// console.log("First Smallest number is ",smallest1);
for(let i=0;i<array.length;i++){
    if(i == array.indexOf(smallest1)){
        continue;
    }
    if(smallest2 > array[i]){
        smallest2 = array[i];
    }
}
console.log("Second Smallest number is ",smallest2);
}

secondSmallest([1,1,1,2,2,3,3,3]);