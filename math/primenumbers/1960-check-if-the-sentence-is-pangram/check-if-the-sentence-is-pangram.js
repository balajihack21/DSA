/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   let myset=new Set("qwertyuiopasdfghjklzxcvbnm")

   for(let i=0;i<sentence.length;i++){
       myset.delete(sentence[i])
   }
   return myset.size==0
};