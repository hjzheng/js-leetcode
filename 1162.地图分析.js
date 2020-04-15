/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let rows = grid.length,
    cols = grid[0].length,
    q = [],
    node = null,
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0],
    hasOcean = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        q.push({ x: i, y: j });
      }
    }
  }

  while (q.length !== 0) {
    node = q.shift();
    let x = node.x,
      y = node.y;
    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (
        newX < 0 ||
        newX >= rows ||
        newY < 0 ||
        newY >= cols ||
        grid[newX][newY] !== 0
      ) {
        continue;
      }

      grid[newX][newY] = grid[x][y] + 1;
      hasOcean = true;
      q.push({ x: newX, y: newY });
    }
  }

  if (node == null || !hasOcean) {
    return -1;
  }

  return grid[node.x][node.y] - 1;
};
// @lc code=end
