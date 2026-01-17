/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map={}


    for(let i=0;i<t.length;i++){
        if(map[t[i]]){
            map[t[i]]++
        }
        else{
            map[t[i]]=1
        }
    }

    console.log(map)
for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            map[s[i]]--
        }
    }

    
    for(let m in map){
        if(map[m]!=0){
            return m
        }
    }
};