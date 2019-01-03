'use strict';

// const util = require('util');
const LinkedList = require('./linked-list.js').LinkedList;
const mergeLists = require('./llMerge/ll-merge.js');
let list1 = new LinkedList();
let list2 = new LinkedList();

list1.append('Alpha');
list1.append('Beta');
list1.append('Jared');
list1.append('Jelly');
list1.append('Harvey');

list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);

list1.mergeLists.mergeLists(list2);

list1.print();

// console.log('Is Jared in the list:', list.includes('Jared'));
