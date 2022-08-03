
// string is a datatype, and also works like an array.
// string is collection of individual letters/characters.

var x = "Mumbai is a city";
// var x = 20;
// var output = x[5]+x[4]+x[3]+x[2]+x[1]+x[0];
// console.log(output);

function reverseString(str){
    var output="";
    for(let i=str.length-1; i>=0; i--){
        output=output+str[i];
        // i => ia => iab => iabm => iabmu => iabmuM;
    }
    console.log(output);
}

reverseString("Vivek"); // keviV
reverseString("Mumbai"); // keviV
reverseString("Mumbai is a city"); // keviV