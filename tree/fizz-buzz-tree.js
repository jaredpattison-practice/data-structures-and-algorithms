'use strict';

const Node = require('./node.js');
const Tree = require('./binary-tree.js');

function fizzBuzz(tree) {
  if(!tree.root){return null;}
  const _walk = function(node) {

    if(node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'fizzBuzz';
    }
    if(node.value % 3 === 0) {
      node.value = 'fizz';
    }
    if(node.value % 5 === 0) {
      node.value = 'buzz';
    }
    if(node.left) {
      _walk(node.left);
    }
    if(node.right) {
      _walk(node.right);
    }
  };

  _walk(tree.root);
  return tree;
}

let a, b, c, d, e, f;

let tree = new Tree();
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

// console.log(tree.inOrder());
// fizzBuzz(tree);
// console.log(tree.inOrder());

module.exports = fizzBuzz;