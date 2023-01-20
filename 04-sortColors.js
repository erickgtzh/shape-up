/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 
    let lo = 0, i = 0, hi = nums.length - 1;
    while(i <= hi) {
      if(nums[i] === 0) {
        [nums[i], nums[lo]] = [nums[lo], nums[i]];
        lo++;
      } else if(nums[i] === 2) {
        [nums[i], nums[hi]] = [nums[hi], nums[i]];
        hi--;
        i--;
      } 
      i++;
    }
    return nums;
  };
  
  const numbers = [1,2,0];
  console.log(sortColors(numbers));
  
  // https://leetcode.com/problems/sort-colors/description/