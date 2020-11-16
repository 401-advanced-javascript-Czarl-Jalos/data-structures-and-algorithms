'use strict';

const insertSort = require('./insertSort.js');


describe('insertSort', () => {

  it('sort an array, seeing the expected value', () => {

    let array = [8,4,23,42,16,15];

    expect(insertSort(array)).toEqual([ 4, 8, 15, 16, 23, 42 ])
  });

});