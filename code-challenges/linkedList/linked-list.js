'use strict';

const util = require('util');
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;           
  }

  insert(value) {
    
    let node = new Node(value);      
    node.next = this.head;
    this.head = node;
  }

  insertBefore(value, newValue) {

    if(!this.head) {
      this.head = new Node(newValue);
      return;
    }

    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }

    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newValue) {

    if (!this.head) {
      this.head = new Node(newValue);
      return;
    }

    let current = this.head;
    while (current.value !== value) {
      current = current.next; 
    }

    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }

  kthFromEnd(k) {

    if(!this.head) {
      return;
    }

    let current = this.head;
    let totalSteps = 0;

    while (current.next) {
      current = current.next;
      totalSteps++;
    }

    current = this.head;
    let steps = totalSteps - k;

    if (steps < 0) {
      return;
    }

    for (let i = 0; i < steps; i++){
      current = current.next;
    }

    return current.value;
  }

  append(value) {

    let node = new Node(value);      

    if (!this.head) {                
      this.head = node;            
      return;
    }

    let current = this.head;         

    while(current.next) {             
      current = current.next;           
    }
    current.next = node;              
  }

  includes(value) {
    
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    while(current.next) {
      if(current.value === value) {    
        return true;
      } 
      current = current.next;      
    } 
    return current.value === value ? true: false;                        
  }

  print() {
    if (this.head === null) {
      console.log('list is empty');
      return null;
    }
    console.log(util.inspect(this, {depth: this.length}));
  }
}

module.exports = {LinkedList};
