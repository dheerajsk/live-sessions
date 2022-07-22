
let  innterCounter=1;
let  innterCounter2=1;
for(let i=1; i<5; i++){
    console.log("Outer for loop: "+i);
    for(let j=0; j<=1; j++){
        console.log("Inner for loop: "+innterCounter++);
        for(let j=0; j<=5; j++){
            console.log("Inner2 for loop: "+innterCounter2++);
        }
    }
}