'use strict';

const insertShiftArray = require('../array-shift.js');

describe('array-shift module', () => {

  it ('returns new array with value inserted into middle of array', () => {
    let expected = [ 2, 4, 5, 6, 8];
    let newArray = insertShiftArray([ 2, 4, 6, 8], 5);
    expect(newArray).toEqual(expected);
  });
});