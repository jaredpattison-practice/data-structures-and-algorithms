'use strict';

const Queue = require('./stacks-and-queues.js');

describe('queue', () => {

  it('creates an instance', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  describe('enqueue()', () => {
    
    it('adds value to rear of queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.queue[0]).toEqual(1);
      queue.enqueue(2);
      expect(queue.queue[1]).toEqual(2);
    });
  });

  describe('dequeue()', () => {

    it('returns value from front of queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
    });
  });
  
  describe('peek()', () => {
    
    it('returns null on an empty queue', () => {
      let queue = new Queue();
      expect(queue.peek()).toBeNull();
    });

    it('returns the next item', () => {
      let queue = new Queue();
      queue.enqueue(4);
      expect(queue.peek()).toEqual(4);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(4);
    });

    it('does not alter the queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
    });
  });
});









