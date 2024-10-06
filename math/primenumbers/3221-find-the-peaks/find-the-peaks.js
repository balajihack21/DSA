/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let res=[]
    for(let i=1;i<mountain.length;i++){
        if(mountain[i]>mountain[i-1] && mountain[i]>mountain[i+1]){
            res.push(i)
        }
    }
    console.log(res)
    return res
};