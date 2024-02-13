/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    function palindrome(s){
       for(let i=0;i<s.length;i++){
           if(s[i]!==s[s.length-i-1]){
               return false
           }
       }
       return true
    }


    for(let i=0;i<words.length;i++){
        if(palindrome(words[i])==true){
            return words[i]
        }
    }

    return ""

};