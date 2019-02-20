'use strict';

const radixSort = require('../radix-sort.js');

describe('radixSort', () => {

  it ('correctly sorts an array', () => {
    let unsortedArr = [3, 5, 2];
    let sortedArr = [2, 3, 5];
    expect(radixSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('handles array with length 1', () => {
    let unsortedArr = [3];
    let sortedArr = [3];
    expect(radixSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('handles empty array', () => {
    let unsortedArr = [];
    let sortedArr = [];
    expect(radixSort(unsortedArr)).toEqual(sortedArr);
  });

  it ('correctly sorts an array of varying lenth digits', () => {
    let unsortedArr = [ 30, 1, 77, 16, 555, 2222];
    let sortedArr = [ 1, 16, 30, 77, 555, 2222];
    expect(radixSort(unsortedArr)).toEqual(sortedArr);
  });
});