/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let h=[]
    let t=0

    for(let i=0;i<words.length;i++){
        let arr=new Array(26).fill(0)
        t+=words[i].length
        for(let j=0;j<words[i].length;j++){
            
            arr[words[i].charCodeAt(j)-97]++
        }
        
        for(let k=0;k<chars.length;k++){
            if(arr[chars.charCodeAt(k)-97]!=0){
            arr[chars.charCodeAt(k)-97]--
            }
        }

        console.log(arr)

        for(let m=0;m<arr.length;m++){
            if(arr[m]!=0){
                h.push(i)
                break
            }
        }
    }
    console.log(h)
let sum=0
let j=0
   while(j<h.length){
    sum+=words[h[j]].length
    // console.log(words[j])
    j++
   }
   console.log(sum)
   console.log(t)
    // console.log(h)
    return t-sum
};