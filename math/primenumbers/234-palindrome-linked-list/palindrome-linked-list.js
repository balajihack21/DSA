/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast=head
   let arr=[]
     while(fast!=null){
        arr.push(fast.val)
        fast=fast.next
     }
   console.log(arr)

   let i=0
   let j=arr.length-1
   while(i<j){
    if(arr[i]!=arr[j]){
        return false
    }
    i++
    j--
   }

   return true


     
};