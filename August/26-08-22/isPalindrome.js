

function isPalindrome(str, i, j){
    // Base conditions.
    // 1. check if we are in center
    if(i==j || i>j){
        return true;
    }
    // 2. check if values are not same.
    if(str[i]!=str[j]){
        return false;
    }
    return isPalindrome(str, i+1, j-1);

}

// 1. Starting point
const str = "malyalam";
console.log(isPalindrome(str, 0, str.length-1));