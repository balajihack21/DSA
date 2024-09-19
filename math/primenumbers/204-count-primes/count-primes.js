/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr=new Array(n).fill(true)

arr[1]=false


for(let i=2;i*i<=n;i++){
  if(arr[i]==false){
    continue
  }
  
  for(let j=i*i;j<=n;j=j+i){
    arr[j]=false
  }
}

let cnt=0

for(let i=2;i<n;i++){
  if(arr[i]){
    cnt++
  }
}
return cnt

};