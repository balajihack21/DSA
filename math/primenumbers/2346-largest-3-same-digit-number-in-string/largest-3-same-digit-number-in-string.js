/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let max=""
    for(let i=1;i<num.length;i++){
      let res=""
      if(num[i]==num[i-1] && num[i]==num[i+1]){
        res+=num[i]+num[i-1]+num[i+1]
      }
        // console.log(res)
        if(res>max){
            max=res
        }
    }
  console.log(max)
  return max
};