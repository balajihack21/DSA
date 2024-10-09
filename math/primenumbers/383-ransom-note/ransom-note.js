/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomeNote, magazine) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<ransomeNote.length;i++){
        arr[ransomeNote.charCodeAt(i)-97]++
    }

    for(let i=0;i<magazine.length;i++){
        if(arr[magazine.charCodeAt(i)-97]!=0){
            arr[magazine.charCodeAt(i)-97]--
        }
    }

      for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            return false
        }
      }
      return true
};