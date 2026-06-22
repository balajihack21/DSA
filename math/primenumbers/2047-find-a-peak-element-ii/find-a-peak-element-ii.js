/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {

    let max=mat[0][0]
    let x=0
    let y=0

    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(max<mat[i][j]){
                max=mat[i][j]
                x=i
                y=j
            }
        }
    }

    return [x,y]

    
};