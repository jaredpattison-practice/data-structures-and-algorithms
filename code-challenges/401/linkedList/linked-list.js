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

  insertBefore(value, newVal){
    if (!this.head) {
      this.head = new Node(newVal);
      return;
    }

    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }

    let node = new Node(newVal);
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newVal) {

    if (!this.head) {
      this.head = new Node(newVal);
      return;
    }

    let current = this.head;
    while(current.next !== value) {
      current = current.next;
    }

    let node = new Node(newVal);
    node.next = current.next;
    current.next = node;
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
    console.log(util.inspect(this.list,{depth: this.list.length}));
  }
}

module.exports = {LinkedList};
