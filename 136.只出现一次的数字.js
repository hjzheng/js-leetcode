/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (map.has(curr)) {
      map.delete(curr);
    } else {
      map.set(curr, 1);
    }
  }

  return map.keys().next().value;
};
// @lc code=end
