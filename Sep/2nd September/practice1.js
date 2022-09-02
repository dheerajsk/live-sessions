
function foo(n){
    let ans = 0; // c1
    for(let i=0; i<n; i++){ // n
        for(let j=0; j<Math.log10(i); j++){ // logn
            ans+=1; // c2(n * logn)
        }
    }
    console.log(ans); // c3
}

// c1 +c2(nlogn) +c3
// O(n)=> c2(nlogn) => nlogn

// O(n), O(n^2), logN, 



foo(1);
foo(5);
foo(10);
foo(100);
