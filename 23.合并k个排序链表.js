/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/* 
1.两两合并  O(k*N）
2.借助优先队列 O(k*logN）
*/
var mergeKLists = function(lists) {
  let preHead = new ListNode(Number.MIN_SAFE_INTEGER);

  lists.reduce((l1, l2) => mergeTwoLists(l1, l2), preHead);

  return preHead.next;
};

var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(Number.MIN_SAFE_INTEGER);

  let pre = preHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      pre.next = l2;
      l2 = l2.next;
    } else {
      pre.next = l1;
      l1 = l1.next;
    }
    pre = pre.next;
  }

  // 当一个有序链表遍历完毕后，将另一个链表，追加到新链表上
  pre.next = l1 === null ? l2 : l1;

  return preHead.next;
};
// @lc code=end
