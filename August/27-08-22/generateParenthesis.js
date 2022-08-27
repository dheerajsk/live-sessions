
const result = []; // array result
const n = 2; // num of left and right parenthesis in every string
let str=""; // set of parentheses which makes an item in array

function generateParenthesis(str, left, right){
    // end position
    if(str.length==n*2){
        result.push(str);
        return;
    }
    // reaching towards end
    if(left!=n){
        generateParenthesis(str+"(", left+1, right);
    }
    if(right<left){
        generateParenthesis(str+")", left, right+1);
    }
}

// 1. Start position
generateParenthesis(str, 0, 0);
console.log(result);
