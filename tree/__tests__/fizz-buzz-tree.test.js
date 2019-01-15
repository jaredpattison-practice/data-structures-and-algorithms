'use strict';

const Node = require('../node.js');
const Tree = require('../binary-tree.js');
const fizzBuzz = require('../fizz-buzz-tree.js');

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

describe('fizzBuzz', () => {
  it('returns expected result', () => {
    let result = [ 'fizz', 4, 14, 2, 'fizzBuzz', 'fizz'];
    fizzBuzz(tree);
    expect(tree.inOrder()).toEqual(result);
  });

  it('returns result if true', () => {
    expect(fizzBuzz(tree)).toBeTruthy();
  });
  
  it('returns null if tree root is null', () => {
    tree.root = null;
    expect(fizzBuzz(tree)).toBeNull();
  });


});
