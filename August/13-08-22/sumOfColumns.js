

function findSumOfColumns(matrix){
    const result=[];

    // 1. Go through each columns in matrix.
    for(let i=0; i<matrix[0].length; i++){
        let sum=0;
        // 2. Go through every row.
        for(let j=0; j<matrix.length; j++){
            sum=sum+matrix[j][i];
        }
        result.push(sum);
    }
    console.log(result);
}

const matr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

findSumOfColumns(matr);