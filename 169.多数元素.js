/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
1. 排序后，取索引为长度的 n/2 的元素 时间复杂度O(nlogn)
2. HashTable, 统计数字个数  时间复杂度O(n)
*/
var majorityElement = function(nums) {
  const map = new Map(),
    len = nums.length,
    half = Math.floor(len / 2);

  // 只有一个元素
  if (len === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let curNum = map.get(nums[i]);
      if (curNum >= half) return nums[i];
      map.set(nums[i], curNum + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
};
// @lc code=end
