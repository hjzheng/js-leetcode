/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 与 1162. 地图分析 一样，多源 BFS，累加距离
var updateMatrix = function (matrix) {
  let N = matrix.length;

  if (N === 0) {
    return [];
  }

  let M = matrix[0].length;

  let res = Array.from(new Array(N), () => new Array(M).fill(0));

  let dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1],
    Q = [],
    visited = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) {
        visited.add(`${i}:${j}`);
        Q.push({ i, j });
      }
    }
  }

  while (Q.length !== 0) {
    let { i, j } = Q.shift();

    for (let k = 0; k < 4; k++) {
      let nI = i + dx[k],
        nJ = j + dy[k];

      if (
        nI < 0 ||
        nI >= N ||
        nJ < 0 ||
        nJ >= M ||
        visited.has(`${nI}:${nJ}`)
      ) {
        continue;
      }

      // 累加
      res[nI][nJ] = res[i][j] + 1;

      visited.add(`${nI}:${nJ}`);

      Q.push({ i: nI, j: nJ });
    }
  }

  return res;
};
// @lc code=end
