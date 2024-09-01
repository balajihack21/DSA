/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(nums) {

    // let arr=['a','e','i','o','u','A','E','I','O','U']
    let s=nums.split('')
    // let i=0
    // let j=s.length-1

    // while(i<j){
    //     while(i<j && arr.indexOf(s[i]) ==-1){
    //         i++
    //     }
    //     while(i<j && arr.indexOf(s[j]) ==-1){
    //         j--
    //     }


    //     [s[i],s[j]]=[s[j],s[i]]
    //     i++
    //     j--
    // }

    // return s.join('')

    //aprroach -2

    let i=0
    let j=s.length-1

function isvowel(ch){
    let arr=['a','e','i','o','u','A','E','I','O','U']
    if(arr.indexOf(ch)==-1){
        return false
    }
  return true
}

    while(i<j){
        if(!isvowel(s[i])){
            i++
        }
        else if(!isvowel(s[j])){
            j--
        }
        else{
            [s[i],s[j]]=[s[j],s[i]]
            i++
            j--
        }
    }
  return s.join('')

};