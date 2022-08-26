


// T(n) => O(n)

function findPairForSum(array, num){
    var obj = {};

    for(let i=0; i<array.length; i++){
        let firstNum = array[i];
        let secondNum = num-firstNum;
        if(!obj[firstNum.toString()]){
            // making entry for 1st num;
            obj[firstNum.toString()]=1;
        }else{
            obj[firstNum.toString()]=obj[firstNum.toString()]+1;
        }
        // check if second number exists in obj.
        if(obj[secondNum.toString()] && obj[secondNum.toString()]!=i.toString()){
            console.log([firstNum, secondNum]);
        }
    }
    return;

    var x = "10";

}
findPairForSum([20,30,50,10,0,40,20], 40);