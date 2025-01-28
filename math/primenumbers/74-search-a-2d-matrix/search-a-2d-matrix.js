/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
     
     let m=matrix.length
     let n=matrix[0].length
     let s=0
     let e=(m*n)-1
     while(s<=e){

        let mid=Math.floor((s+e)/2)

        if(matrix[Math.floor(mid/n)][mid%n]==target){
            return true
        }
        else if(matrix[Math.floor(mid/n)][mid%n]>target){
            e=mid-1
        }
        else{
            s=mid+1
        }
     }

     return false
};