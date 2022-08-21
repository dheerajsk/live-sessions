
// need help of a prebuilt library/module/package. -> readline
// how to use such a prebuilt library.
    // To use a library, you need to import it in your program.
    // how to import a library

// 1. Importing a library to read input from terminal.
const readline = require("readline");

// 2. Create an interface to read data from terminal
// process is inbuilt javasript object.
const options = {
    input: process.stdin,
    output: process.stdout
};
const rlInterface = readline.createInterface(options);

rlInterface.question("Enter a number", (answer)=>{
    console.log(answer);
    rlInterface.close();
});