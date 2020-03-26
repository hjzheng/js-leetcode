/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 典型的 hashMap
var longestPalindrome = function(s) {
  let map = new Map();

  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  let odd = false,
    num = 0;
  // 遍历 map, 偶数直接相加, 奇数加 value - 1
  for (let value of map.values()) {
    if (value % 2 === 1) {
      odd = true;
      num += value - 1;
    } else {
      num += value;
    }
  }

  return odd === true ? num + 1 : num;
};
// @lc code=end
