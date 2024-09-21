/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let ind=1
    let dir=1

    while(time!=0){
        if(ind==n){
            dir=-1
        }
        else if(ind==1){
            dir=1
        }

        ind+=dir
        time--
    }

    console.log(ind)
    return ind
};