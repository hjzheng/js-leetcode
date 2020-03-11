/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  let preGrayCode = grayCode(n - 1);

  return [
    ...preGrayCode,
    ...preGrayCode.reverse().map(v => v + Math.pow(2, n - 1))
  ];
};
// @lc code=end
