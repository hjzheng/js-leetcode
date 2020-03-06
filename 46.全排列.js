/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  function helper(index, max, visited, sub) {
    if (index >= max) {
      res.push(sub);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(i)) {
        visited.add(i);
        helper(index + 1, max, visited, [...sub, nums[i]]);
        visited.delete(i);
      }
    }
  }

  helper(0, nums.length, new Set(), []);

  return res;
};
// @lc code=end
