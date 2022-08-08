

function printReversePyramid(num){
    for(let i=1; i<=num; i++){
        let line="";
        // 1. Print initial space
        for(let j=1; j<i; j++){
            line=line+" "; // line+="";
        }
        // 2. Print nums and spaces in between.
        for(let k=i; k<=num; k++){
            line+=k+" ";
        }
        console.log(line);
    }
}

printReversePyramid(9);