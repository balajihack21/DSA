/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function(n, k) {
    
    let result=[]
let path=[]
function backtrack(start){
    if(path.length==k){
        result.push([...path])
        return
    }


for(let i=start;i<=n;i++){
    //move
    path.push(i)

    //explore
 backtrack(i+1)

    //undo
    path.pop()


}
}

backtrack(1)
return result

};