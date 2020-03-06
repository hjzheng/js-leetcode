/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let max = Number.MIN_SAFE_INTEGER,
    i = 0,
    j = 0;

  for (; i < s.length; i++) {
    let subStr = s.substring(j, i);
    if (subStr.includes(s[i])) {
      max = Math.max(subStr.length, max);
      j += subStr.indexOf(s[i]) + 1;
    }
  }

  max = Math.max(s.substring(j).length, max);

  return max;
};
// @lc code=end
