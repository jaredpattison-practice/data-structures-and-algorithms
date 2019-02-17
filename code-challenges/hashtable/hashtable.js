'use strict';

const LinkedList = require('../linkedList/linked-list.js').LinkedList;
const util = require('util');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce( (a, v) => a + v.charCodeAt(0), 0) % this.size;
  }

  add(key, val) {
    let hash = this.hash(key);
    if(!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].insert({[key]: val});
  }

  contains(key) {
    let hash = this.hash(key);
    if(this.map[hash]) {
      return true;
    }
    return false;
  }

  find(key) {
    let hash = this.hash(key);
    if(this.map[hash]) {
      return this.map[hash];
    }
    return null;
  }
}

module.exports = Hashtable;

// let myHash = new Hashtable(6);
// myHash.add('John', 'dad');
// myHash.add('Cathy', 'mom');
// myHash.add('Zach', 'boy');
// myHash.add('Allie', 'girl');

// console.log(myHash.find('Cathy'));

