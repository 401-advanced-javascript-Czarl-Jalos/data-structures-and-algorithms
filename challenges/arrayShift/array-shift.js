'use strict'

const insertShiftArray = (array, value) => {
  let slicePointOne = Math.floor(array.length / 2);
  let slicePointTwo = Math.ceil(array.length / 2);

  let arrayOne = array.slice(0, slicePointOne);
  let arrayTwo = array.slice(slicePointTwo);

  let newArray = [...arrayOne , value, ...arrayTwo];
  return newArray;
  }