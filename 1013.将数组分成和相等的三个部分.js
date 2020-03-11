/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  // 求和
  let sum = A.reduce((sum, n) => (sum += n), 0);

  if (sum % 3 !== 0) {
    return false;
  }

  const avg = sum / 3;

  // 左右指针，left right 初始化不为 0 的情况，是有可能 avg 可能是 0
  let left = null,
    right = null,
    i = 0,
    j = A.length - 1;

  // j - i > 1 必须分成3份，所以中间至少得有一个元素
  while (j - i > 1) {
    if (left !== avg) {
      left = left === null ? 0 : left;
      left += A[i];
      // 已经等于平均值的话，索引就不更新了
      left !== avg && (i += 1);
    }

    if (right !== avg) {
      right = right === null ? 0 : right;
      right += A[j];

      // 已经等于平均值的话，索引就不更新了
      right !== avg && (j -= 1);
    }

    if (left === avg && right === avg) {
      return true;
    }
  }

  return false;
};
// @lc code=end
