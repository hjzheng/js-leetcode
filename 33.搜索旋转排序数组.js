/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = null;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[right]) {
      // 说明左边有序
      if (target < nums[mid] && target >= nums[left]) {
        // 目标在左边
        right = mid - 1;
      } else {
        // 目标在右边
        left = mid + 1;
      }
    } else {
      // 说明右边有序
      if (target > nums[mid] && target <= nums[right]) {
        // 目标在右边
        left = mid + 1;
      } else {
        // 目标在左边
        right = mid - 1;
      }
    }
  }

  return -1;
};
// @lc code=end
