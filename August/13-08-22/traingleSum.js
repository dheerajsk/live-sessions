// Statically Typed Language, Dynamically Typed Lnaguage.

// var str=10; // number  JS, Python is dynamically typed
// int num=10; // C, C++, java, C# statically typed language


function findSumOfTriangles(matrix){
    let lowerTriangleSum = 0;
    let upperTriangleSum = 0;

    for(let i=0; i<matrix.length; i++){
            // Lower Traingle
        for(let j=0; j<=i; j++){
            lowerTriangleSum+=matrix[i][j];
            return;
        }
            // Upper Traingle
        for(j=i;j<matrix[i].length;j++){
            upperTriangleSum+=matrix[i][j];
        }
    }
    console.log(lowerTriangleSum);
    console.log(upperTriangleSum);
}


const matr = [
    [2,15,4],
    [1,2,15],
    [2,10,7]
];

findSumOfTriangles(matr);