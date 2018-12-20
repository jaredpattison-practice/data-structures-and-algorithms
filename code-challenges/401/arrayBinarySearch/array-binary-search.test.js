'use strict';

const binarySearch = require('./array-binary-search');

describe('Testing array-binary-search', () => {
  test('It should return index of target value', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 5)).toStrictEqual(3);
  });
  test('It should return -1 if value not found', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);
  });
});
