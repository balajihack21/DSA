/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let mystack=[]

    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            mystack.push(s[i])
        }
        else{
            if(s[i]==')' && mystack[mystack.length-1]!='('){
                return false
            }
            if(s[i]=='}' && mystack[mystack.length-1]!='{'){
                return false
            }
            if(s[i]==']' && mystack[mystack.length-1]!='['){
                return false
            }
            mystack.pop()
        }
    }

    return mystack.length==0
};