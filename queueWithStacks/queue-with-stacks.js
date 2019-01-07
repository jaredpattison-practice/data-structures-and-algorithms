'use strict';

const stack = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

  constructor() {
    this.stack1 = new stack();
    this.stack2 = new stack();
  }

  enqueue(value) {
    if(!this.stack1.value){
      this.stack1.push(value);
    }
    else {
      this.stack2.push(value);
    }
  }

  dequeue() {
    if(this.stack1){
      return this.stack1.pop();
    }
    else {
      while (this.stack2.value) {
        shift();
      }
    }
  }
  shift() {

  } 
}

module.exports = PseudoQueue;

// let test = new PseudoQueue();

// test.enqueue(99);
// console.log(test.dequeue());