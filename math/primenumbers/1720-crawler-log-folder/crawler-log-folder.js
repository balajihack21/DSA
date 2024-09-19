/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let cnt=0

    for(let i=0;i<logs.length;i++){
        if(logs[i]=="../"){
            cnt=Math.max(0,cnt-1)
        }
        else if(logs[i]=="./"){
            continue
        }
        else{
            cnt++
        }
    }
    return cnt
};