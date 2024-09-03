/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
//    let str=(String)(n)
//    let sum=0
//     while((Number)(str)!=1){
//      sum=0
//     for(let i=0;i<str.length;i++){
//         let m=(Number)(str[i])
//         sum+=m*m
//     }
//     str=sum.toString()
//     }

    // return true

    function add(num,sum=0){//19
    
   while(num>0){
      let dig=num%10//9
     sum+=dig*dig//81

     num=Math.floor(num/10)
   }

   return sum
    }
   
   let s=n
   let f=add(n)
  
  while(f!=s && f!=1){
    s=add(s)
    f=add(add(f))

  }

    return f==true
};