// Array functions.

const studentIDs = [2, 9, 43, 90, 45, 32, 89, 76];
                   [4, 18, 86, 180, 90, 64, 178, 152]

// creating a new array as result of operation on every element in original array
            // console.log(studentIDs.map((num)=>num*2));

          
// const students = ["Zakvan", "Anashvar", "Rahul", "Asif", "Jagruthi"];
//                 //expect output = [6, 8, 5, 4, 8]

                const nameMapper = (x)=>x.length;
            // console.log(students.map(nameMapper));

            

// const multiplyby2 = function (num){
//     return num*2;
// }


// function multiplyby2(array){
//     const result=[];
//     for(let i=0; i<array.length;i++){
//         result.push(array[i]*2);
//     }
//     console.log(result);
// }


// multiplyby2(studentIDs);

// Map function.
    // transforms array into a new array as a reuslt of some operation.



// Filter Function.

// const nums = [19, 45, 78, 23, 12, 90, 32, 87, 63];

const isEven = (num)=>num%2==0;

// expected output: [78, 12, 90, 32]
    // console.log(nums.filter(isEven));

// const students = ["Zakvan", "Anashvar", "Rahul", "Asif", "Jagruthi"];
// []
  console.log(students.filter(name=> name.length<=5));

const students = [
    {"name":"Shivam", age: 30},
    {"name":"Saurabh", age: 25},
    {"name":"Student3", age: 17},
    {"name":"Student4", age: 22},
    {"name":"Student5", age: 10},
    {"name":"Student6", age: 12}
]
// expected output
    [ {"name":"Shivam", age: 30},
    {"name":"Saurabh", age: 25},
    {"name":"Student4", age: 22}]

    // students.filter((obj)=> obj.age>18);


const nums = [2, 4, 6];

// expected output: 22
    console.log(nums.reduce((preNum, currNum)=> preNum+currNum)/nums.length);