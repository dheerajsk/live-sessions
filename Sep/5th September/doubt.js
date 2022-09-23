var t;
const readline = require("readline");
const rlInterface = readline.createInterface({input:process.stdin,output:process.stdout});
function lectureAttendence(M,N){
    console.log(M);
    var attendeceRequired = .75 * M;
    if(N<attendeceRequired){
        console.log("You nedd ",(M-N),"more lectures");
    }
    else
    {
        console.log("Your attendece is sufficient");
 
    }
}
 
rlInterface.question("Enter the value of  M and N",
(answer) =>{ t=answer;rlInterface.close();
    lectureAttendence(t,19);
});
