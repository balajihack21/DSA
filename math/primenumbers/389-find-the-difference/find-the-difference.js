/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map={}
  //  {a:1,b:1,c:1,d:1,e:1}

  //{a:1,b:1,c:1,d:1,e:1}


  for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }
        else{
            map[s[i]]++
        }
  }

  for(let i=0;i<t.length;i++){
            if(map[t[i]]){
                map[t[i]]-=1
            }
            else{
                return t[i]
            }
  }


//   for(let m in map){
//     if(map[m]<0){
//         return m
//     }
//   }

  return ''
// console.log(map)

};