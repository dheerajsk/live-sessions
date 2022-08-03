

// Given a number age. You need to find if that age is coming under voting age. Age
// can be considered as the voting age if it is greater than or equal to 18.

// create a function to return true or false based on voting age.

function isVotingAge(age){
    if(age>=18){
        console.log("true");
    }else{
        console.log(false);
    }
}

console.log(isVotingAge(25));
isVotingAge(10)