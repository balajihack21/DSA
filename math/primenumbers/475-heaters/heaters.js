/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
   houses.sort((a,b)=>{return a-b})
   heaters.sort((a,b)=>{return a-b})
    let r=0
    let ind=0

    for(let i=0;i<houses.length;i++){
            while(ind<heaters.length && Math.abs(houses[i]-heaters[ind]>= Math.abs(houses[i]-heaters[ind+1]))){
                ind++
            }

        r=Math.max(r,Math.abs(houses[i]-heaters[ind]))
    }

    return r
};