
var steps=0;

function makeItOne(num){
    // Base condition.
    if(num==1){
        console.log(steps);
        return;
    }
    steps+=1;
    // Approach / Operations to reach to base condition
    num = num-1;
    if(num%2==0){
        num = num/2;
    }
    if(num%3==0){
        num = num/3;
    }
    makeItOne(num);
}

// Starting point
makeItOne(10); // 2
steps=0;
makeItOne(20); 