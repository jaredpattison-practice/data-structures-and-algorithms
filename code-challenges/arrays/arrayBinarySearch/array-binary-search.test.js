'use strict';

const binarySearch = require('./array-binary-search').binarySearch;

describe('Testing array-binary-search', () => {
  it('It should return index of target value', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 5)).toEqual(3);
  });
  it('It should return -1 if value not found', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
  });
});
