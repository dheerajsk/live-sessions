

function find3NUmberSum(array, sum){

    let matrix=[];
    // brute force technique.
    for(let i=0; i<array.length-2; i++){
        for(let j=i+1;j<array.length-1; j++){
            for(let k=j+1; k<array.length; k++){
                if(array[i]+array[j]+array[k]==sum){
                    matrix.push([array[i], array[j], array[k]])
                    // console.log([array[i], array[j], array[k]]);
                }
            }
        }
    }
    // console.log(matrix);

    for(let i=0; i<matrix.length; i++){
        const array = matrix[i]; // [5, 3, 2]
        for(let j=0; j<matrix.length; j++){
            if(i==j) continue;
            let target = [...matrix[j]]; // [3, 5, 2]
            let counter = 0;
            for(let k=0; k<array.length; k++){
                if(target.includes(array[k])){
                    target.splice(target.indexOf(array[k]), 1);
                    counter++;
                }
            }
            if(counter==3){
                matrix.splice(j, 1);
                j--;
            }
        }
    }
    console.log(matrix);
}

const array = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
find3NUmberSum(array, 0);