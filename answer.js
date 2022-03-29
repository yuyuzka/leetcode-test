/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
     let maxPrice=0;
    for(let i=0;i<prices.length-1;i++){
       if(prices[i+1]>prices[i]){
           maxPrice=maxPrice+prices[i+1]-prices[i]
       }

    }
    return maxPrice
};
prices = [1,2,3,4,5]
console.log(maxProfit(prices))