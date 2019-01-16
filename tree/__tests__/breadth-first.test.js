'use strict';

const Node = require('../node.js');
const Tree = require('../binary-tree.js');
const breadthFirst = require('../breadth-first.js');

let tree, a, b, c, d, e, f;

beforeAll( () => {
  tree = new Tree();
  a = new Node(a);
  b = new Node(b);
  c = new Node(c);
  d = new Node(d);
  e = new Node(e);
  f = new Node(f); 
  a.left = b;
  a.right = c;
  a.value = 'a';
  b.value = 'b';
  c.value = 'c';
  d.value = 'd';
  e.value = 'e';
  f.value = 'f';
  c.left = f;
  b.left = d;
  b.right = e;
  tree.root = a;
});

describe('breadthFirst', () => {
  it('returns expected result', () => {
    let expected = [ 'a', 'b', 'c', 'd', 'e', 'f'];
    let result = breadthFirst(tree);
    expect(expected).toEqual(result);
  });

  it('returns result if true', () => {
    expect(breadthFirst(tree)).toBeTruthy();
  });
  
  it('returns null if tree root is null', () => {
    tree.root = null;
    expect(breadthFirst(tree)).toBeNull();
  });


});