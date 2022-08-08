
// Note: " " space is also treated as a character in programs.

function printPyramid(num){
    for(i=1 ; i<=num ; i++) 
    {
        let star="";
        // this is to print spaces on every line.
        for(k=1; k<=num-i; k++){
            star+=" ";
        }
        // this is to print stars on every line.
        for(j=0; j<2*i-1; j++){
            star+=j.toString();
        }
        console.log(star);
    }
}

printPyramid(10);