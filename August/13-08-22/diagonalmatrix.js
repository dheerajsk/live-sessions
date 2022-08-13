

function isDiagonalMatrix(matr){
    // loop to go through every rows in matrix.
    for(let i=0; i<matr.length; i++){
        for(j=0; j<matr[i].length; j++){

            // if this is not diagonal area and have non-zero values
            if(i!=j && matr[i][j]!=0){
                return false;
            }
        }
    }
    return true;
}

const matrix = [
    [1,0,0,0],
    [0,6,0,0],
    [0,0,11,0],
    [0,0,0,16]
];

const matrix2 = [
    [1,0,4,0],
    [0,6,0,0],
    [0,0,11,0],
    [0,0,0,16]
];


const matrix3 = [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,11,0],
    [0,0,0,16]
];

console.log(isDiagonalMatrix(matrix3));