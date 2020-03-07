/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 * f(n) = f(n-1) + f(n-2)
 */
var fib = function(N) {
  if (N <= 1) {
    return N;
  }

  let f0 = 0,
    f1 = 1,
    f2 = null;

  for (let i = 2; i <= N; i++) {
    f2 = f1 + f0;
    f0 = f1;
    f1 = f2;
  }

  return f2;
};
// @lc code=end
