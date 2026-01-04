/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let result=[]
    let used=new Array(nums.length).fill(0)


    function backtrack(path){

        if(path.length==nums.length){
            result.push([...path])
            return
        }

for(let i=0;i<nums.length;i++){
        //move

        if (used[i]==1){
            continue
        }
        path.push(nums[i])
        used[i]=1
        

        //explore
        backtrack(path)


       //undo
       path.pop()
       used[i]=0

}

    }







    backtrack([])
    return result
    
};