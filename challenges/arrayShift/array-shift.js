'use strict'

function insertShiftArray(arr, value) {
  let firstHalf = Math.floor(arr.length / 2);
  let secondHalf = Math.ceil(arr.length / 2);

  let firstArr = arr.slice(0, firstHalf);
  let secondArr = arr.slice(secondHalf);

  let newArray = [...firstArr, value, ...secondArr];
  return newArray;
}


