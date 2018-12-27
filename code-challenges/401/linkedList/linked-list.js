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

  }

  insertAfter(value, newVal) {

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
}

function print() {
  console.log(util.inspect(list,{depth:list.length}));
}

let list = new LinkedList();

list.insert('Alpha');
list.insert('Beta');
list.insert('Jared');
list.insert('Jelly');
list.append('Harvey');

console.log(list.includes('Jared'));

print();
