'use strict';

// const LinkedList = require('../linked-list');
// const Node = require('./node.js');

function mergeLists = (list1, list2) => {
  if(!this.head) {
    return;
  }

  let curr1 = list1.head;
  let curr2 = list2.head;
  let temp1 = curr1.next;
  let temp2 = curr2.next

  while(curr1 && curr2) {
    next1 = curr1.next;
    next2 = curr2.next;

    curr1.next = curr2;
    curr2.next = temp1;

    curr1 = temp1;
    curr2 = temp2;
  }
  list2.head = curr2;
};

module.exports = {mergeLists};
