// S(n) = 1, T(n)=O(n)

function sumOfArray(array){
    let sum = 0; // 1
    for(let j=0; j<array.length; j++){
        sum=sum+array[j];
    }
    console.log(sum);
}

sumOfArray([3,4,5]);

// 1
// n
// array.length / 
// 3