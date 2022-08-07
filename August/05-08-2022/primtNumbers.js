

function findPrimtNumbers(n){

    for(let i=2; i<=n; i++){ // 6
        let isPrime=true;
        for(let j=2; j<=i-1; j++){ 
            if(j==2){
                continue;
            }
            if(i%j==0){
                isPrime=false;
                break;
            }
            
        }
        if(isPrime){
            console.log(i);
        }
    }
}

findPrimtNumbers(100);
// findPrimtNumbers(100);