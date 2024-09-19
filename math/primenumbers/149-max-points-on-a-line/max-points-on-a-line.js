/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
    let n=points.length
   if(n==1){
    return 1
   }
   let res=0
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let cnt=2
            let dy=points[j][1]-points[i][1]
            let dx=points[j][0]-points[i][0]

            for(let k=0;k<n;k++){
                if(k!=i && k!=j){
                   let  d_y=points[k][1]-points[i][1]
                    let d_x=points[k][0]-points[i][0]

                    if(dy*d_x==d_y*dx){
                        cnt++
                    }
                }
            }
            res=Math.max(res,cnt)
        }
    }
    console.log(res)
    return res
};