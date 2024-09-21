/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let match=0

    while(n!=1){
        if(n%2==0){
            match+=Math.floor(n/2)
            n=Math.floor(n/2)
        }
        else{
            match+=Math.floor((n-1)/2)
            n=Math.floor(((n-1)/2)+1)
        }
    }

    console.log(match)
    return match
};