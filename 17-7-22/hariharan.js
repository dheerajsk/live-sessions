//Check if age  >18 and return true

/*1.*/function ageTovote(x) {
    if (x >= 18) {
        console.log(" You are a voter ")
    }
    else {
        console.log("18 is the minimum sge for voting")
    }
}

console.log(ageTovote(25));


/*2.*/function ageTovote(y) {
    let z = y >= 18;
    return z;
}
var output = ageTovote(15);
console.log(output)

//Sir why my first fuction is also retuerning boolean while i gave it function to display some message
//sir you said js will excute line by line that means even though if i use same function name it should have been displayed my first function and then go to next but why its using my
//my last function to give the first function result