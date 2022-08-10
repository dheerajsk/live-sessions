

function printSpiralMatrix(matrix){

    let startRow=0;
    let startCol=0;
    let endRow=matrix.length-1;
    let endCol=matrix[0].length-1;
    
    while(startRow<endRow && startCol<endCol){
    // 1. 1st Loop from 1st row 1st column to 1st row last column.
    for(let i=startCol; i<=endCol; i++){
        console.log(matrix[startRow][i]);
    }

    // 2. 2nd Loop from 2ndrow last column to last row last column
    startRow=startRow+1;
    for(let i=startRow;i<=endRow;i++){
        console.log(matrix[i][endCol]);
    }

    endCol = endCol-1;
    for(let i=endCol; i>=startCol; i--){
        console.log(matrix[endRow][i]);
    }

    endRow = endRow-1;
    for(let i=endRow; i>=startRow; i--){
        console.log(matrix[i][startCol]);
    }
    startCol=startCol+1;
    }
}

const matrix = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]
];

printSpiralMatrix(matrix);