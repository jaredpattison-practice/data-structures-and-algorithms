'use strict';

let AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter constructor', () => {

  it ('will make and instance', () => {
    let expected = new AnimalShelter();
    expect(expected).toBeInstanceOf(AnimalShelter);
  });

  it('will enque and dequeue animals', () => {
    let expected = new AnimalShelter();
    expected.enqueue('cat');
    expected.enqueue('dog');
    expected.enqueue('cat');
    expect(expected.dequeue('dog')).toEqual('dog');
  });
});