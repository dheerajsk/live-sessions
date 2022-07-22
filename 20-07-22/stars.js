
function printStar(num){
    for(i=1;i<=num;i++){
        let star="";
        for (j=1; j<= num - i; j++){
            star += " ";
        }
        for (k=0; k<2*i-1; k++){
            star +="*";
        }
        console.log(star);
 
    }
}
 
printStar(5);
