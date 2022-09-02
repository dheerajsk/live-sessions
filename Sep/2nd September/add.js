


function checkTC(n){

    for(i=0; i<n; i++){
        console.log(i);  // a*n
    }
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            console.log(i, j); // b*n^2
        }
    }
    console.log(result); // c*1
    // O(an+bn^2+c)
    // O(n^2)
}