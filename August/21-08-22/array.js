
const onedarray = [2,4,8,9,12, 32, 7, 90, 11, 88];

const twodarray = []
// [[2,4], [8,9], [12]]

// 10-2
// 15-3
// 20-4
// 25-5

// 0, 5, 10

for(let i=0; i<onedarray.length/5; i++){
    const array = [];
    const jindex =i*5
    for(var j=jindex; j<jindex+5; j++){
        array.push(onedarray[j]);
    }
    twodarray.push(array);
}

console.log(twodarray);