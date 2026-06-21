/**
 * @param {string} moves
 * @return {number}
 */
var maxDistance = function(moves) {
    let x=0
    let y=0
    let cnt=0


    for(let i=0;i<moves.length;i++){
        if(moves[i]=="U"){
            y+=1
        }
        else if(moves[i]=="R"){
            x+=1
        }
        else if(moves[i]=="L"){
            x-=1
        }
        else if(moves[i]=="D"){
            y-=1
        }
        else{
            cnt++
        }
    }

    return Math.abs(x)+Math.abs(y)+cnt
};