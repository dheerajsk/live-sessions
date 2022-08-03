

function printGradingSystem(score){
    if(score>=90){
        console.log("A");
    }else if(score>=80 && score<90){
        console.log("B");
    } else if(score>59 && score<80){
        console.log("C");
    } else if(score>32 && score<60){
        console.log("D");
    }else{
        console.log("F");
    }
}

printGradingSystem(7);