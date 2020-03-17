/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
// 双指针 一个读，一个写
var compress = function(chars) {
  let num = 1,
    lastChar = null,
    j = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (lastChar !== null) {
      if (lastChar !== chars[i]) {
        if (num === 1) {
          chars[j] = lastChar;
          j++;
        } else {
          chars[j] = lastChar;
          j++;

          (num + '').split('').forEach(v => {
            chars[j] = v;
            j++;
          });
        }
        num = 1;
      } else {
        num++;
      }
    }

    lastChar = chars[i];
  }

  return j;
};
// @lc code=end
