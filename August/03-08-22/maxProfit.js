

function findMaxProfit(array){

    let maxProfit = 0;
    let buyingPrice = 0;
    let sellingPrice = 0;
    let changeBuyingPrice = true;

    for(let i=0; i<array.length-1; i++){
        sellingPrice = array[i+1];
        if(changeBuyingPrice){
            buyingPrice = array[i];
        }

        if(sellingPrice<buyingPrice){
            // loss
            changeBuyingPrice=true;
        }else{
            // profit
            let profit = sellingPrice-buyingPrice; // 180-100 = 80.
            if(profit>maxProfit){ // check if current profit is greater than previous profit
                maxProfit=profit;
            }
            changeBuyingPrice = false;
        }
    }
    console.log(maxProfit);
}

findMaxProfit([78, 21, 67, 68, 23, 190, 43, 21, 23]);