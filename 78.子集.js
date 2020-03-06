/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];

  function helper(level, max, subset) {
    if (level >= max) {
      res.push(subset);
      return;
    }
    helper(level + 1, max, [...subset]);
    helper(level + 1, max, [...subset, nums[level]]);
  }

  helper(0, nums.length, []);

  return res;
};
// @lc code=end
