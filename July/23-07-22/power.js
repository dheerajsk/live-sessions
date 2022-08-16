
// Find power to a number. => 10, 2 => 100
// e: 2, 5 => 2^5 => 32.
// Approach.
// 

function getPower(num, pow){
    let i=1;
    let result=1;
    while(i<=pow){
        result=result*num;
        i++;
    }
    console.log(result);
}

// getPower(10, 2); // 100
// getPower(2, 5); 
getPower(4, 3);
