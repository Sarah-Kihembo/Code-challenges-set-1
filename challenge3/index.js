// Write a function named twoSum which takes two parameters: nums and target. 
// Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0,1]

// Example 2:
//  Input: nums = [3,2,4], target = 6
//  Output: [1,2]



function twoSum (nums,target){
    for(let i=0; i< nums.length; i++){
        for(let a=i+1; a< nums.length; a++) {
            if (nums[i] + nums[a] === target){
                console.log(i,a)
            }
        }
    }
}

let nums1 = [2,7,11,15]; 
let target1 = 9;
console.log(twoSum(nums1,target1));
