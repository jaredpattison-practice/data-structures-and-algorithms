'use strict';

let multiBracketValidation = str => {
  let arr = [];
  if (str.length <= 1) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {

    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      arr.unshift(str[i]);
    }

    if (str[i] === '}') {

      if (arr[0] !== '{') {
        return false;
      }
      else {
        arr.shift();
      }
    }
    if (str[i] === ']') {

      if (arr[0] !== '[') {
        return false;
      }
      else {
        arr.shift();
      }
    }
    if (str[i] === ')') {

      if (arr[0] !== '(') {
        return false;
      }
      else {
        arr.shift();
      }
    }
  }
  return true;
};

module.exports = multiBracketValidation;
