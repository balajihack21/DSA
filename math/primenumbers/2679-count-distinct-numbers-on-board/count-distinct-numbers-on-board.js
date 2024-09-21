/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    let arr=[n]
     const res = new Set();
    res.add(n);
    let cnt=0
    while(arr.length>0){
        let a=arr.shift()

        for(let i=1;i<=a;i++){
            if(a%i==1){
                if(!res.has(i)){
                    res.add(i)
                    arr.push(i)
                }
            }
        }
    }
       console.log(res)
       return res.size
};