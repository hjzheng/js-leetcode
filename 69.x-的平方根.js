/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1,
    right = x / 2,
    mid = null;

  while (right - left > 1e-6) {
    mid = left + (right - left) / 2;
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return Math.floor(right);
};
// @lc code=end
