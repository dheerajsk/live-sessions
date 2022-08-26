
// n=> 5, o/p => 1,2,3,4,5


function printIncreasingNumber(n){

    // base condition
    if(n==0){
        return;
    }
    // moving towards end
    printIncreasingNumber(n-1);
    // print n
    console.log(n);
}

printIncreasingNumber(5);