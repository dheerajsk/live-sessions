
function foo(n){
    let ans = 0; // c1
    for(let i=1; i<n ; i++){
        for(let j=n; j>i ; j--){
            ans+=1; // c2 * n * n
        }
    }
    console.log(ans); // c3
}

// c1+c2(n^2)+c3
// c1+c2n^2+c3
// n^2

// n**2
// n*n
// n^2
