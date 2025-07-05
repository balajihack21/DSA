/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map={}
    let max=-1

    for(let i=0;i<=arr.length-1;i++){
        if(!map[arr[i]]){
            map[arr[i]]=1
        }
        else{
            map[arr[i]]+=1
        }
    }

       for(let m in map){
          if(map[m]==m){
            max=map[m]
          }
       }

       return max
};