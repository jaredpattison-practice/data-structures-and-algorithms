'use strict';

let LinkedList = require('../linked-list.js').LinkedList;

describe('linked list constructor', () => {

  it('will default null', () => {
    let expected = {head: null};
    let result = new LinkedList();
    expect(expected).toEqual(result);
  });
});

describe('linked list insert', () => {

  it('can handle multiple data types', () => {
    let nodeTail = {
      value: 9,
      next: null,
    };
    let nodeHead = {
      value: 'test',
      next: nodeTail,
    };

    let expected = {head: nodeHead};
    let result = new LinkedList();
    result.insert(9);
    result.insert('test');
    expect(expected).toEqual(result);
  });

  it('only inserts one parameter when multiple given', () => {
    let node = {
      value: 'test',
      next: null,
    };
    let expected = {head: node};
    
    let result = new LinkedList();
    result.insert('test', 9);
    expect(expected).toEqual(result);
  });
});

describe('linked list append', () => {

  it('can handle multiple data types', () => {
    let nodeTail = {
      value: 'test',
      next: null,
    };
    let nodeHead = {
      value: 9,
      next: nodeTail,
    };

    let expected = {head: nodeHead};
    let result = new LinkedList();
    result.append(9);
    result.append('test');
    expect(expected).toEqual(result);
  });

  it('only append one parameter when multiple given', () => {
    let node = {
      value: 'test',
      next: null,
    };
    let expected = {head: node};
    
    let result = new LinkedList();
    result.append('test', 9);
    expect(expected).toEqual(result);
  });
});

describe('includes', () => {

  it('returns true if true', () => {
    let expected = true;

    let list = new LinkedList;
    list.insert(9);
    let result = list.includes(9);
    expect(expected).toEqual(result);
  });

  it('returns false if false', () => {
    let expected = false;

    let list = new LinkedList;
    list.insert(9);
    let result = list.includes(5);
    expect(expected).toEqual(result);
  });
  
  it('handles no parameters', () => {
    let expected = false;

    let list = new LinkedList();
    list.insert(2);
    list.insert(10);
    let result = list.includes();
    expect(expected).toEqual(result);
  });
});

describe('linked list insertBefore', () => {

  it ('inserts new value before specified value', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insert(0);
    list.insertBefore(3, 2);

    expect(list.head.next.next.value).toEqual(2);
  });
});

describe('linked list insertAfter', () => {

  it('inserts new value before specified value', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insert(0);
    list.insertAfter(1, 2);

    expect(list.head.next.next.value).toEqual(2);
  });
});

describe('linked list kthFromEnd', () => {
  
  it('returns element kth from end of list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(1);
    list.insert(0);

    let expected = 3;
    let result = list.kthFromEnd(1);

    expect(result).toEqual(expected); 
  });
});
