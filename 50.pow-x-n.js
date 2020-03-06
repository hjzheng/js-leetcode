/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / pow(x, -n);
  } else {
    return pow(x, n);
  }
};

function pow(x, n) {
  // 终止条件
  if (n === 0) {
    return 1;
  }

  // 处理当前
  let half = pow(x, Math.floor(n / 2));

  if (n % 2 === 1) {
    return half * half * x;
  } else {
    return half * half;
  }
}
// @lc code=end
