/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    let d_y=coordinates[1][1]-coordinates[0][1]
    let d_x=coordinates[1][0]-coordinates[0][0]

    for(let i=2;i<coordinates.length;i++){
        let d1_y=coordinates[i][1]-coordinates[0][1]
        let d1_x=coordinates[i][0]-coordinates[0][0]

        if(d_y*d1_x!=d1_y*d_x){
            return false
        }
    }

    return true
};