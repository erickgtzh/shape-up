/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let pL = 0, pR = nums.length - 1, rIdx = nums.length - 1, result = new Array(nums.length).fill(0);
    while(pL <= pR) {
        let sqrL = nums[pL] * nums[pL];
        let sqrR = nums[pR] * nums[pR]; 
        if(sqrL >= sqrR){
            result[rIdx] = sqrL;
            pL++;
            rIdx--;
        } else {
            result[rIdx] = sqrR;
            pR--;
            rIdx--;
        }
    }
    return result;
};

const numbers = [-4,-1,0,3,10];
console.log(sortedSquares(numbers));

// https://leetcode.com/problems/squares-of-a-sorted-array/submissions/877041356/