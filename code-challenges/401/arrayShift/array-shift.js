'use strict';


function insertShiftArray(arr, value) {
  let newArr = [];
  let half = Math.ceil(arr.length/2);
  for (let i = 0; i < arr.length; i++) {
    if (i < half) {
      newArr[i] = arr[i];
    }
    if (i === half) {
      newArr = value;
    }
    if (i > half) {
      newArr[i+1] = arr[i];
    }
  }
  return newArr;
}

module.exports = insertShiftArray();