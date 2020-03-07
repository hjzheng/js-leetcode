/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this._cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this._cache.has(key)) {
    const value = this._cache.get(key);
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this._cache.has(key)) {
    this._cache.delete(key);
    this._cache.set(key, value);
  } else {
    if (this.capacity === this._cache.size) {
      this._cache.delete(this._cache.keys().next().value);
    }
    this._cache.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
