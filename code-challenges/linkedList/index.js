'use strict';

const util = require('util');
const LinkedList = require('./linked-list.js').LinkedList;
let list = new LinkedList();

list.insert('Alpha');
list.insert('Beta');
list.insert('Jared');
list.insert('Jelly', 4, 'candy');
list.append('Harvey');
list.print();

console.log('Is Jared in the list:', list.includes('Jared'));
