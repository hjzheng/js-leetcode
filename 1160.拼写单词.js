/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
/**
 * hashMap
 */
var countCharacters = function(words, chars) {
  let map = new Map();

  for (let c of chars) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  return words
    .filter(w => {
      // clone Map
      let nMap = new Map(map);

      if (w.length > chars.length) {
        return false;
      } else {
        for (let c of w) {
          if (nMap.has(c)) {
            if (nMap.get(c) === 1) {
              nMap.delete(c);
            } else {
              nMap.set(c, nMap.get(c) - 1);
            }
          } else {
            return false;
          }
        }
      }
      return true;
    })
    .reduce((s, w) => w.length + s, 0);
};
// @lc code=end
