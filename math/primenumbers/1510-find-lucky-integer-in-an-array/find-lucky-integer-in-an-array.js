/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let a=new Array(500).fill(0)

    for(let i=0;i<=arr.length-1;i++){
        a[arr[i]]++
    }

    for(let i=a.length-1;i>0;i--){
        if(i==a[i]){
            return a[i]
        }
    }

    return -1
};