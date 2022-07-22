// function CheckIfALargest(a,b,c){
//     if(a>b){
//         if(a>c){
//             console.log("Largest");
//         }else{
//             console.log("Largest");
//         }
//     }else{
//         console.log("Not largest")
//     }
// }

function CheckIfALargest(a,b,c){

    a>b && a>c ? console.log("a is largest") : b>a && b>c ? console.log("b is largest") : console.log("c is largest");
}


console.log(CheckIfALargest(1,2,3)) // Not Largest
console.log(CheckIfALargest(3,2,1)); // Largest
console.log(CheckIfALargest(2,1,3)); // NotLargest