'use strict';

const Hashtable = require('../hashtable.js');

const LL = require('../../linkedList/linked-list.js');

describe('hashtable constructor', () => {
  
  it ('creates correct size', () => {
    let thisHashtable = new Hashtable(100);
    expect(thisHashtable.size).toEqual(100);
  });

  // it ('each node with collision contains linked list', () => {
  //   let thisHashtable = new Hashtable(1);
  //   thisHashtable.add('a');
  //   thisHashtable.add('b');

  //   expect(thisHashtable[0]).toBeInstanceOf(LL);
  // });

});

describe('hashtable add', () => {
  it ('ads a vaulue correctly', () => {
    let thisHashtable = new Hashtable(8);
    let key = 'mykey';
    let value = 'myvalue';
    thisHashTable.add(key, value);
    let index = thisHashTable.getHash(key);
    
    let node = thisHashTable.table[index].head;
    expect(node.value[0]).toEqual(key);
    expect(node.value[1]).toEqual(value);
  )}
})