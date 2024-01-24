/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let mystack=[]

    for(let i=0;i<s.length;i++){
       if(s[i]=='*'){
           mystack.pop()
       }else{
           mystack.push(s[i])
       }
    }

    return mystack.join('')
};