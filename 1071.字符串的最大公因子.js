/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // 假设str1是 N个x，str2是 M个x，那么 str1+str2 肯定是等于 str2+str1的。
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  return str1.substr(0, gcd(str1.length, str2.length));
};

// 辗转相除法求gcd 最大公约数
function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}
// @lc code=end
