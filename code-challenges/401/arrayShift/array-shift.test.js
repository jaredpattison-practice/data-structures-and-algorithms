'use strict';

const insertShiftArray = require('./array-shift.js');

describe('array-shift module', () => {
  it ('returns new array with value inserted into middle of array', () => {
    let expected = [ 1, 2, 4, 5];
    let newArray = insertShiftArray([1, 2, 5], 4);
    expect(newArray).toEqual(expected);
  });
});