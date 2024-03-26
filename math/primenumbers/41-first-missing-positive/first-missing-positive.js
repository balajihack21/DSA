/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(arr) {
    let n = arr.length;
  let i = 0;
  while(i<n){
      let c=arr[i]-1
      if(arr[i]!==arr[c]&&arr[i]>0&&arr[i]<n){
          [arr[i],arr[c]]=[arr[c],arr[i]]
      }
      else{
          i++
      }
  }
console.log(arr)

for(let i=0;i<n;i++){
    if(arr[i]!==i+1){
        return i+1
    }
}

return n+1
};