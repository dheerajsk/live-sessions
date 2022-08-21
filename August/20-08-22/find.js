

const students = [
    {
        "fname":"Gynanendra",
        "lname":"Prakash"
    },
    {
        "fname":"Rahul",
        "lname":"Shankar"
    },
    {
        "fname":"Ahart",
        "lname":"Gawhande"
    },
    {
        "fname":"Aarti",
        "lname":"Shahu"
    },
    {
        "fname":"Asif",
        "lname":"Khan"
    },
    {
        "fname":"Abhilesh",
        "lname":"Yadav"
    }
]

const nameWithA = students.find((obj)=> obj.fname.startsWith("A"));
console.log(nameWithA);
