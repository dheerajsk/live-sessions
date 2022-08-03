

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
            continue;
        }else{
            // profit
            let profit = sellingPrice-buyingPrice;
            if(profit>maxProfit){
                maxProfit=profit;
            }
            changeBuyingPrice = false;
        }
    }
    console.log(maxProfit);
}

findMaxProfit([100, 180, 260, 310, 695, 535, 40]);