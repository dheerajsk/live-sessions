

function isEqual(obj1, obj2){
    // 1. Getting all the keys of both objects.
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // const checkIfEqualValues = function(key){
    //     return obj1[key]==obj2[key]
    // }
    return keys1.length == keys2.length && keys1.every((key)=> obj1[key]==obj2[key]);
}

function isEqualValues(obj1, obj2){
    // 1. Getting all the keys of both objects.
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    console.log(values1);
    const checkIfEqualValues = function(v, i){
        return v==values2[i];
    }

    return values1.length == values2.length && values1.every((v, i)=> v==values2[i]);
}
var student1 = {
    "fname":"Gynanendra",
    "lname":"Prakash"
};
var student1_copy = {
    "fname":"Gynanendra",
    "lastname":"Prakash"
};

console.log(isEqualValues(student1, student1_copy));



// var student2 = {
//     "fname":"Rahul",
//     "lname":"Shankar"
// }

// console.log(isEqual(student1, student1_copy));