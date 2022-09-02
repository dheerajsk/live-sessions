
function foo(n){
    let ans = 0; // c1
    for(let i=0; i<=n; i++){ 
        for(let j=0; j<i-5; j++){
            ans+=1;  // c2(n*n-5)
        }
    }
    console.log(ans); // c3
}

// c1+c2(n^2-5)+c3
// c1 +c2n^2 -5c2 + c3
// n^2


// n=> 10 , 5
