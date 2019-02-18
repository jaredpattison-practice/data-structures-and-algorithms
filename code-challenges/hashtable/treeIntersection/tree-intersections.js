'use strict';

let Hashtable = require('../hashtable');
const Node = require('../../node.js');
const Tree = require('../../binary-tree.js');

function treeIntersection(tree1, tree2) {

  if(arguments.length !== 2) { 
    throw 'error'; 
  }
  if(!tree1.root || !tree2.root){ 
    return null; 
  }

  let myHash = new Hashtable(1042);
  let resultArr = [];

  const _walk = (node) => {
    myHash.add(node.value, 0);
    if(node.left){_walk(node.left); }
    if(node.right){_walk(node.right); }
  };

  _walk(tree1.root);

  const _walkAgain = (node) => {
    if (myHash.contains(node.value)){
      resultArr.push(node.value); 
    }

    if(node.left){_walkAgain(node.left); }
    if(node.right){_walkAgain(node.right); }
  };

  _walkAgain(tree2.root);
  
  if(!resultArr.length) { 
    return null; 
  }
  return resultArr;


}


let a, b, c, d, e, f;

let tree1 = new Tree();
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
tree1.root = a;

let k, l, g, h, i, j;

let tree2 = new Tree();
k = new Node(3);
l = new Node(5);
g = new Node(6);
h = new Node(2);
i = new Node(16);
j = new Node(18); 
k.left = l;
k.right = g;
g.left = j;
l.left = h;
l.right = i;
tree2.root = a;

console.log(treeIntersection(tree1, tree2));

// module.exports = treeIntersection;
