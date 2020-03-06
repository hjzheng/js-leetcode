/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];

  function helper(level, max, start, sub) {
    if (level >= max) {
      res.push(sub);
      return;
    }

    for (let i = start + 1; i <= n; i++) {
      sub.push(i);
      helper(level + 1, max, sub[level], [...sub]);
      sub.pop();
    }
  }

  helper(0, k, 0, []);

  return res;
};
// @lc code=end
