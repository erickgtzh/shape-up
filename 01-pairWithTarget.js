/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [i, j] = [0, numbers.length - 1];
    numbers = numbers.sort((a, b) => a - b);

    while(i < j) {
        let sum = numbers[i] + numbers[j];
        if(sum === target) return [i+1, j+1]
        else if(sum > target) j--;
        else if(sum < target) i++;
    }
};

const numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target));

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/876404345/