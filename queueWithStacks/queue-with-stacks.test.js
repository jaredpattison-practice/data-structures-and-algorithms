'use strict';

const Queue = require('./queue-with-stacks.js');

describe('pseudoqueue', () => {

  it ('creates an insance', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  describe('enqueue()', () => {

    it('adds value to rear of queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.dequeue()).toEqual(1);
    });

    describe('dequeue()', () => {

      it('returns value from front of queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
      });
    });
  });
});


