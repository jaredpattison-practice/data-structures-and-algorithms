'use strict';

let Hashtable = require('../hashtable');
const Node = require('../../../tree/node.js');
const Tree = require('../../../tree/binary-tree.js');

function treeIntersection(tree1, tree2) {

  let hash = new Hashtable(1024);

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

let tree = new Tree();
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
tree.root = a;
