
// // Objects.

// // Why use Objects ?
//     // to represent an entity, prototype.
//     // to store data where there are attributes and its values.
//     // key & value pair.
// // How object stores data.

// ["Saurabh", "Upadhyay", 25, "Mumbai"],
// ["Not Married", "B.Tech", "Male", "10/10/1995"],
// ["employeed", "tcs", "sap", 50000],
// [true, false, "9876543211", "REWt14620"]

// var fname = "fname";
// const saurabhData = {
//     fname:"Saurabh",
//     "lname":"Upadhyay",
//     "age": 25,
//     "location":"Mumbai",
//     "IsMarried": false,
//     "Education":"B.tech",
//     "gender":"Male",
//     "dob":"10/10/1995",
//     "employment":{
//         "company":"Google",
//         "dept":"Google Search",
//         "salary":5000000
//     },
//     "marks":[9, 9.5, 10, 9.86]
// };

// console.log(saurabhData.fname);
// console.log(saurabhData.Education);
// console.log(saurabhData["age"]);
// console.log(saurabhData.employment.salary);
// console.log(saurabhData["employment"].salary);
// console.log(saurabhData["employment"]["salary"]);
// console.log(saurabhData.marks[2]);

const students = [
    {"fname":"Abhimanyu", "lname":"Singh"},
    {"fname":"hari", "lname":"Ram"},
    {"fname":"upasana", "lname":"maurya"}
];
console.log(students[2].lname);