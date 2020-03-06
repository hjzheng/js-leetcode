/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
      ')': '(',
      ']': '[',
      '}': '{'
    },
    stack = [];

  for (let c of s) {
    let tmp = map[c];
    if (tmp) {
      let top = stack.pop();
      if (tmp !== top) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};
// @lc code=end
