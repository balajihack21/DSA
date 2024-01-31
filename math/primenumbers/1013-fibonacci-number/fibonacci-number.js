/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
//    if(n<=1){
//        return n
//    }
//     return fib(n-2)+fib(n-1)

    let arr=new Array(n+1)
    arr[0]=0
    arr[1]=1
    for(let i=2;i<=n;i++){
         arr[i]=arr[i-1]+arr[i-2]
    }

    return arr[n]
};