'use strict';

function binarySearch(arr, val){
 
  let start = 0;
  let end = arr.length - 1;

  while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(arr[mid] < val){
      start = mid + 1;
      console.log('val > arr[mid]', val, arr[mid]);
      console.log('start mid end', start, mid, end);
    }else if(arr[mid] > val){
      console.log('val < arr[mid]', val, arr[mid], mid);
      console.log('start mid end', start, mid, end);
      end = mid -1;
    }else{
      return mid;

    }
    return [-1, start, mid, end];
  }
}

module.exports = binarySearch();