/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + a[i])
// dp[i][1] = Math.max(dp[i-1][1], - a[i])

var maxProfit = function(prices) {
  if (prices.length === 0) return 0;

  let n = prices.length,
    dp = Array.from(new Array(n), () => new Array(2).fill(null));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
};
// @lc code=end
