/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let arr=word.split('')
    let ind=arr.indexOf(ch)
    
    if(ind==-1){
        return word
    }

    let i=0
    while(i<ind){
        [arr[i],arr[ind]]=[arr[ind],arr[i]]
        i++
        ind--
    }

    return arr.join('')
};