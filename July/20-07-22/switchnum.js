

function identifyNumber(num){
    if(num>0){
        console.log("Positive");
    }
    else if(num<0){
        console.log("Negative");
    }else if(num==0){
        console.log("zero");
    }else{
        console.log("Invalid");
    }
}

identifyNumber(10);
identifyNumber(-98);
identifyNumber(0);
identifyNumber("abc");