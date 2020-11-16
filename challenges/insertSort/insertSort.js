// Pseudocode
//   InsertionSort(int[] arr)
  
//     FOR i = 1 to arr.length
    
//       int j <-- i - 1
//       int temp <-- arr[i]
      
//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1
        
//       arr[j + 1] <-- temp


function selectionSort (array) {

 for (let i = 1; i < array.length; i++) {

  let j = i - 1;
  let temp = array[i];

  while (j >= 0 && temp < array[j]) {

    array[j + 1] = array[j];
    j = j - 1;
  }
  array[j + 1 ] = temp;
 }
console.log(array);
 return array;

}

module.exports = selectionSort;