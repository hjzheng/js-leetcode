/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  for (let i = 0, j = s.length - 1; i <= j; ) {
    if (/\W/.test(s[i])) {
      i++;
    } else if (/\W/.test(s[j])) {
      j--;
    } else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      }
      i++, j--;
    }
  }

  return true;
};
// @lc code=end
