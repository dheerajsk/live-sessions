
function foo(n, m){
    let a=0; // c1
    for(let i=1; i<n; i++){
        a+=i; // c2*n-1
    }
    let b=0; // c3
    for(let i=1; i<m; i++){
        b+=i; // c4*m-1
    }
}
// n+m, n+n, 2n, n
// c1+c2(n-1)+c3(m-1)+c4(m-1)
// c1+c2n-c2+c3m-c3+c4m-c4
// c2n+c3m+c4m
// n+m+m
// n+2m
// n+m
// T(n,m)=> O(n+m) => O(n)+O(m) => O(n) or O(m)
// foo(4, 5) => O(5) => O(m)
// foo(5,4)=> O(4) => O(n)