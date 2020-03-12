/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let NUM = Math.pow(2, 31),
    max = NUM - 1,
    min = -NUM;

  let overflow = x => {
    return x >= max || x <= min ? 0 : x;
  };

  let isNegative = x < 0;

  if (isNegative) {
    x = -x;
  }

  let xStr = (x + '').split('');

  for (let i = 0, j = xStr.length - 1; i < j; i++, j--) {
    [xStr[i], xStr[j]] = [xStr[j], xStr[i]];
  }

  let resX = parseInt(xStr.join(''));

  return isNegative ? overflow(-resX) : overflow(resX);
};
// @lc code=end
