/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let mystack=[]
    // let res=""

    for(let i=0;i<s.length;i++){
            if(mystack.length>0 && s[i].toLowerCase()==mystack[mystack.length-1].toLowerCase() && s[i]!=mystack[mystack.length-1]){
                mystack.pop()
            }
        else{
            mystack.push(s[i])
        }
    }
    // console.log(res)
    return mystack.join("")
};