'use strict';

const Node = require('./node.js');

class Tree {
  
  constructor() {
    this.root = null;
  }
  
  preOrder() {
    
    let nodes = [];
    
    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };
    
    _walk(this.root);
    
    return nodes;
    
  }

  inOrder() {

    let nodes = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      nodes.push(node.value);
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return nodes;

  }
  
  postOrder() {

    let nodes = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      nodes.push(node.value);
    };

    _walk(this.root);

    return nodes;

  }

  maxValue() {
    
    if(!this.root) {
      return null;
    }
    let data = [this.root];
    let max = this.root.value;

    while(data.length) {

      let current = data[0];

      if(current.left) {
        data.push(current.left);
      }

      if(current.right) {
        data.push(current.right);
      }

      if(max < data.shift().value); {
        max = data.shift().value;
      }
    }
    return max;
  }
  
}

// let a, b, c, d, e, f;

// let tree = new Tree();
// a = new Node(2);
// b = new Node(4);
// c = new Node(6);
// d = new Node(12);
// e = new Node(14);
// f = new Node(15); 
// a.left = b;
// a.right = c;
// c.left = f;
// b.left = d;
// b.right = e;
// tree.root = a;

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
// console.log(tree.maxValue());

// console.log(tree.preOrder());
// console.log(tree.inOrder());

module.exports = Tree;
