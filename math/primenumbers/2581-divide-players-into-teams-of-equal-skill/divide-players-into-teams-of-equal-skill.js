/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b)=>{return a-b})
    console.log(skill)
    let i=0
    let j=skill.length-1
    let map={}
    let cnt=1

    while(i<j){
        let sum=skill[i]+skill[j]
        let mul=skill[i]*skill[j]
        if(map[sum]){
            map[sum]+=mul
            cnt++
        }
        else{
            map[sum]=mul
        }
        i++
        j--
    }

    console.log(map)

    for(let m in map){
        if(cnt==Math.floor(skill.length/2)){
            return map[m]
        }
    }

    return -1
};