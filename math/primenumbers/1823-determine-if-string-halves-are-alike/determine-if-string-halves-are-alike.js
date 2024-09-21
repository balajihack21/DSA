/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels=['a','e','i','o','u','A','E','I','O','U']
   
  let n=s.length
  let i=0
  let cnt=0
  let cnt1=0
  for(;i<Math.floor(n/2);i++){
    if(vowels.indexOf(s[i])!=-1){
        cnt++
    }
  }

  for(let j=i;j<n;j++){
    if(vowels.indexOf(s[j])!=-1){
        cnt1++
    }
  }

   return cnt==cnt1

};