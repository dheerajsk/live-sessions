

function printWaveForm(matrix){
    const colLength = matrix[0].length;
    // going through all the columns
    for(let col=0; col<colLength; col++){
        if(col%2==0){
            for(let row=0; row<matrix.length; row++){
                console.log(matrix[row][col]);
            }
        }else{
            for(let row = matrix.length-1; row>=0; row--){
                console.log(matrix[row][col]);
            }
        }
    }
}

const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

printWaveForm(matrix);