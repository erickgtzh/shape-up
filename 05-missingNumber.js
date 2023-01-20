/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsSorted = nums.sort( (a, b) => a - b);
    for(let i = 0; i < numsSorted.length; i++) {
        if(numsSorted[i] !== i) return i;
    }
};

const nums = [3,0,1];
console.log(missingNumber(nums));

// https://leetcode.com/problems/missing-number/