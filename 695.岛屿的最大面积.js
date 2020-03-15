/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1],
    max = 0,
    curr = 0;

  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        max = Math.max(curr, max);
        curr = 0;
      }
    }
  }

  function dfs(i, j) {
    if (grid[i][j] === 0) {
      return;
    } else {
      curr += 1;
      // 清除
      grid[i][j] = 0;

      for (let k = 0; k < 4; k++) {
        let disX = i + dx[k],
          disY = j + dy[k];
        if (disX >= 0 && disX < rows && disY >= 0 && disY < cols) {
          dfs(disX, disY);
        }
      }
    }
  }

  return max;
};
// @lc code=end
