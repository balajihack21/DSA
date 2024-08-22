/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>{return a-b})

    let i=0
    let j=people.length-1
    let boats=0

    while(i<=j){

        if(people[i]+people[j]<=limit){
            boats++
            j--
            i++

        }
        else if(people[j]<=limit){
            boats++
            j--
        }
    }
    return boats
};