'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('multiBracketValidation function', () => {

  it ('returns false with string of one', () => {

    expect(multiBracketValidation(')')).toBeFalsy(); 
  });

  it ('returns true with valid input', () => {
    
    let expected = multiBracketValidation('ad(KJf)f{kj[f]}');
    expect(expected).toBeTruthy();
  });

  it ('returns false with invalid input', () => {

    let expected = multiBracketValidation('asdd(0jk)jkl[aa)]');
    expect(expected).toBeFalsy();
  });
});
