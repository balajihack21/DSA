/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let mystack=[]
    
    for(let i=0;i<operations.length;i++){
        if(operations[i]=="C"){
            mystack.pop()
        }
        else if(operations[i]=="D"){
            let t=mystack[mystack.length-1]*2
            mystack.push(t)
        }
        else if(operations[i]=="+"){
            let t=mystack[mystack.length-1]+mystack[mystack.length-2]
            mystack.push(t)
        }
        else{
            mystack.push(Number(operations[i]))
        }
    }
    console.log(mystack)

    let sum=0
    for(let i=0;i<mystack.length;i++){
        sum+=mystack[i]
    }
    console.log(sum)
    return sum
};