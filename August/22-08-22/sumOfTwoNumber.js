
// T(n) => O(n^2)

function findPairForSum(array, num){
    // 1. Go through each number.
    for(let i=0; i<array.length; i++){
        let firstNum = array[i]; 
        let secondNum = num - firstNum; 
        // 2. Find second number.
        for(j=0; j<array.length; j++){
            if(i!=j && array[j]==secondNum){
                console.log([firstNum, secondNum]);
                return;
            }
        }
    }
    console.log("Pair not found");
    return;
}
findPairForSum([60,20,30,40,50, 0], 50);