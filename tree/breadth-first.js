'use strict';

const Node = require('./node.js');
const Tree = require('./binary-tree.js');

function breadthFirst(tree) {
  if (tree.root === null) {
    return null;
  }
  let q = [tree.root];
  let res = [];  
  while (q.length > 0) {
    let c = q[0];
    
    if (c.left !== null) {
      q.push(c.left);
    }
    if (c.right !== null) {
      q.push(c.right);
    }
    res.push(q.shift().value);
  }
  return res;
}

// let tree = new Tree();
// let a = new Node('a');
// let b = new Node('b');
// let c = new Node('c');
// let d = new Node('d');
// let e = new Node('e');
// let f = new Node('f');
// a.left = b;
// a.right = c;
// c.left = f;
// b.left = d;
// b.right = e;
// tree.root = a;

// console.log(breadthFirst(tree));

module.exports = breadthFirst;