/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0
    let m=prices[0]

    for(let i=1;i<prices.length;i++){
        if(m>prices[i]){
             m=prices[i]
        }
        if(prices[i-1]<prices[i]){
           
            let sum=prices[i]-m
            if(sum>max){
                max=sum
            }
        }
    }

    return max
    
};