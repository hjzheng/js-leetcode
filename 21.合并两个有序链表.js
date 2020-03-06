/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
  let header = new ListNode(-1)
  let h = header, h1 = l1, h2 = l2

  while (h1 && h2) {
    if (h1.val > h2.val) {
      h.next = h2
      h2 = h2.next
    } else {
      h.next = h1
      h1 = h1.next
    }

    h = h.next
  }

  h1 ? h.next = h1 : h.next = h2

  return header.next
};
// @lc code=end

