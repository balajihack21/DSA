/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    //approach -1 TC->O(n*k/s)
    // while(true){
    //     for(let i=0;i<chalk.length;i++){
    //         if(k<chalk[i]){
    //             return i
    //         }
    //         k-=chalk[i]
    //     }
    // }
    // return -1

   let sum=0

   for(let i=0;i<chalk.length;i++){
    sum+=chalk[i]
   }

   let rem=k%sum

   for(let i=0;i<chalk.length;i++){
    if(rem<chalk[i]){
        return i
    }
    rem-=chalk[i]
   }

};