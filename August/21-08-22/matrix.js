
const matrix = [
    [1,2,3],
    [3,4,5],
    [6,7,8]
]

// const output = [
// [6,7,8],
// [3,4,5],
// [1,2,3]
// ]

const temp = matrix[matrix.length-1]
matrix[matrix.length-1] = matrix[0];
matrix[0] = temp;
console.log(matrix);

// matrix[0][0] //Mumbai
// matrix[0][1] ///Indore
// matrix[0][2] //Delhi.

// for(var i=0; i<matrix.length; i++){
//     for(var j=0; j<=matrix[i].length; j++){
//         console.log(matrix[i][j]);
//     }
// }
