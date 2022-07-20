// Write a program to sum numbers from 1 to N.
// N => input given to function.

// n=5 => 1+2+3+4+5 = 15

// you can't use math function, n(n+1)/2
// for loop.

function sumTillN(n){
    let sum=0;

    for(let i=1; i<=n; i++){
        sum=sum+i; // 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
        // sum+=i;
    }
    console.log(sum);
}

sumTillN(10); // 55
sumTillN(5); //15
sumTillN(100); // 5050