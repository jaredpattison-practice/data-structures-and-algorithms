'use strict';

const Node = require('../node.js');
const Tree = require('../binary-tree.js');

let tree, a, b, c, d, e, f;

beforeAll( () => {
  tree = new Tree();
  a = new Node(2);
  b = new Node(4);
  c = new Node(6);
  d = new Node(12);
  e = new Node(14);
  f = new Node(15);
  a.left = b;
  a.right = c;
  c.left = f;
  b.left = d;
  b.right = e;
  tree.root = a;
});

describe('maxValue', () => {
  it('returns expected result', () => {
    let expected = 15;
    let result = tree.maxValue();
    expect(expected).toEqual(result);
  });

  it('returns result if true', () => {
    expect(tree.maxValue()).toBeTruthy();
  });
  
  it('returns null if tree root is null', () => {
    tree.root = null;
    expect(tree.maxValue()).toBeNull();
  });


});