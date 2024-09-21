/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let mystack=[]

    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z'){
            mystack.push(s[i])
        }
        else{
            mystack.pop()
        }
    }

    console.log(mystack)
    return mystack.join("")
};