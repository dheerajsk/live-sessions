

function findUniqueNumbers(array){
    const result=[];

    for(let i=0; i<array.length; i++){
        // 1. get element.
        // 2. check if this reoccurs.
        for(let j=0; j<array.length; j++){
            if(i!=j && array[i]==array[j]){
                break;
            }
            if(j==array.length-1){
                result.push(array[i]);
            }
        }
    }
    return result;
}
const array = [4, 6, 9, 3, 3, 8, 6];
console.log(findUniqueNumbers(array));