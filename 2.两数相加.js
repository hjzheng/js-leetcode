/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let header = new ListNode(-1);
  let h = header,
    h1 = l1,
    h2 = l2,
    carry = 0;

  while (h1 || h2 || carry) {
    let num1 = h1 === null ? 0 : h1.val,
      num2 = h2 === null ? 0 : h2.val;
    let num = (num1 + num2 + carry) % 10;
    carry = Math.floor((num1 + num2 + carry) / 10);
    h.next = new ListNode(num);

    h = h.next;
    h1 = h1 === null ? null : h1.next;
    h2 = h2 === null ? null : h2.next;
  }

  return header.next;
};
// @lc code=end
