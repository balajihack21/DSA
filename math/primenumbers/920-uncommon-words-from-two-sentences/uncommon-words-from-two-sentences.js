/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(str1, str2) {
    let map={}
    let res=[]
  let s1=str1.split(' ')
  let s2=str2.split(' ')

    for(let i=0;i<s1.length;i++){
        if(map[s1[i]]){
            map[s1[i]]++
        }
        else{
            map[s1[i]]=1
        }
    }
for(let i=0;i<s2.length;i++){
        if(map[s2[i]]){
            map[s2[i]]++
        }
        else{
            map[s2[i]]=1
        }
    }



    for(let m in map){
        if(map[m]==1){
            res.push(m)
        }
    }

    return res

};