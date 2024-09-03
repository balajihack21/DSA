/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let dir=1
    let ind=1
    let t=0
    //n=5 ,k=6
    while(t!=k){
        if(ind==1){
            dir=1
        }
        else if(ind==n){
            dir=-1
        }
        ind+=dir //1 2 3 4 3 2
        t++//1 2 3 4 5 6
    }
    return ind-1
};