'use strict'

const reverseArray = (array) => {
  let reversedArr = [];
  
  for(let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }

  return reversedArr;
}