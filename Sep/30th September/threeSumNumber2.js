
function find3NUmberSum(array, sum){
    // [5,3,2,6]
    // 2, 1, -4, 6
    // 2, 3, 5, 6
    array.sort((a, b)=> a-b);
    array = [...new Set(array)];
    console.log(array);

    for(let i=0; i<array.length-2; i++){
        let left = i+1;
        let right=array.length-1;

        while(left<right){
            if(array[i]+array[left]+array[right]==sum){
                console.log([array[i], array[left], array[right]]);
                left++;
            }
            else if(array[i]+array[left]+array[right]>sum){
                right--;
            }else{
                left++;
            }
        }
    }
}


// const array = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
const array=[5,3,2,6,9,1,4,0, 2, 6, 9];
find3NUmberSum(array, 10);