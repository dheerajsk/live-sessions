

// Array is most commonly used data structure.
// Array, Stack, Queue, LinkedList, Graph, Trees....

// 0. Why do we need it ? - Yes
// 1. How does it store data ? - Y
// 2. How to access data ? - Y
// 3. How to delete a data ? - Y.
// 4. How to update a data ? - Y.
// 5. How to search a data ?

// 1.....100

var array = ["Rohit", "Abhimanyu", "Gyanendra", "Ritu", "Saurabh"];

// Index in array always start from 0.
// var thirdName = array[2];
// array[2]="Manish";
// console.log(array);
// // console.log(array);
// array.pop();
// console.log(array);
// array.splice(1, array.length); // delete one more elements.
// console.log(array);

// 1. How to add elements in between.
//  var array = ["Rohit", "Abhimanyu", "Gyanendra", "Ritu", "Saurabh"];

// // array.push("Jagruti");
// // console.log(array);
// // array.splice(2, 0, "Mohammad");
// // console.log(array);
// array.splice(4, 0, "Atul");
// console.log(array);

// MultiDimensional Array.

// var students = [ 
//                     ["Abhimanyu", "Atul"],
//                     ["Rohit", "Rahul"],
//                     ["Saurabh", "Sandeep"],
//                     ["Naman", "Nisha"]
//                 ]
// console.log(students[0][1]);
// console.log(students[2][1]);
// console.log(students[0][1]);

var matrix = [
        [0,7, 193, "Syed"],
        [0,true, 0954739, undefined],
        ["Ritu",21, 93, 34567],
        ["Saurabh",false, {"employeeID": 1, "dept": "IT"}, "Ritu is an employee"]
        
]
console.log(matrix[1][3]);
console.log(matrix[2][2]);
console.log(matrix[3][2]);
console.log(matrix[3][0]);
console.log(matrix[0][3]);


const matrix = [2, 3, 4, 5, 6] // single dimensional array