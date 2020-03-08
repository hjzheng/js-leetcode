/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
解法 1 BFS
解法 2 动态规划 
// dp[n] 表示当 总金额数为 n 时的所有组合的最少情况
// dp[n] = n >= k ?  Math.min(dp[i], dp[n-k]+1) k = 1,2,5
*/
// var coinChange = function(coins, amount) {
//   let max = amount + 1;
//   let dp = new Array(amount + 1).fill(max);

//   dp[0] = 0;

//   for (let i = 1; i < max; i++) {
//     for (let j = 0; j < coins.length; j++) {
//       if (i - coins[j] >= 0) {
//         dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
//       }
//     }
//   }

//   return dp[amount] === max ? -1 : dp[amount];
// };

// BFS
var coinChange = function(coins, amount) {
  let q = [amount],
    count = 0,
    visited = new Set();
  coins.sort((a, b) => b - a); // 从大到小排列

  while (q.length !== 0) {
    let size = q.length;

    for (let k = 0; k < size; k++) {
      let value = q.shift();

      if (value === 0) {
        return count;
      }

      for (let i = 0; i < coins.length; i++) {
        let res = value - coins[i];
        if (res >= 0 && !visited.has(res)) {
          visited.add(res);
          q.push(res);
        }
      }
    }

    count++;
  }

  return -1;
};
// @lc code=end
