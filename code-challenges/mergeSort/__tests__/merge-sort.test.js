'use strict';

const mergeSort = require('../merge-sort.js');

describe('mergeSort', () => {

  it ('correctly sorts an array', () => {
    let unsortedArr = [3, 5, 2];
    let sortedArr = [2, 3, 5];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('handles array with length 1', () => {
    let unsortedArr = [3];
    let sortedArr = [3];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('handles empty array', () => {
    let unsortedArr = [];
    let sortedArr = [];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('correctly sorts letters', () => {
    let unsortedArr = ['a', 'c', 'b'];
    let sortedArr = ['a', 'b', 'c'];
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });
});
