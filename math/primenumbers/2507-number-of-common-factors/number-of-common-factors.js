/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let cnt=1
    let n=0
    if(a>b){
        n=a
    }
    else{
      n=b
    }

    for(let i=2;i<=n;i++){
        if(a%i==0 && b%i==0){
            cnt++
        }
    }

    console.log(cnt)
    return cnt
};