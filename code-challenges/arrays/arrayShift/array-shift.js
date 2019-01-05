'use strict';


function insertShiftArray(arr, value) {

  let newArr = [];
  let half = Math.floor(arr.length/2);
  newArr[half] = value;

  for (let i = 0; i < arr.length; i++) {
    if (i < half) {
      newArr[i] = arr[i];
    }
    if (i >= half) {
      newArr[i+1] = arr[i];
    }
  }
  return newArr;
}

module.exports = insertShiftArray;