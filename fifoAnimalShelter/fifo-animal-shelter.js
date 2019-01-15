'use strict';

class AnimalShelter {
  constructor() {
    this.cat = [];
    this.dog = [];
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.cat.push(animal);
    }

    if (animal === 'dog') {
      this.dog.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      return this.cat.shift();
    }

    if (pref === 'dog') {
      return this.dog.shift();

    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
