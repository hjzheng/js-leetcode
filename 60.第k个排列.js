/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const res = [];

  function helper(level, n, visited, str) {
    if (level === n) {
      res.push(str);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited.has(i) && res.length <= k) {
        visited.add(i);
        helper(level + 1, n, visited, str + i);
        visited.delete(i);
      }
    }
  }

  helper(0, n, new Set(), '');

  return res[k - 1];
};
// @lc code=end
