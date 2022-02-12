let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];

function mySort(array) {
  let arr = array;

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         let temp = arr[i];
  //
  //         arr[i] = arr[j];
  //         arr[j] = temp;
  //       }
  //     }
  //   }
  return arr;
}

console.log(mySort(arr));
// function bubbleSortConcept2(arr) {
//   let swapped;

//   do {
//     swapped = false;
//     console.log(arr);
//     arr.forEach((item, index) => {
//       if (item > arr[index + 1]) {
//         // Save the value to a variable so we don't lose it
//         let temp = item;
//         arr[index] = arr[index + 1];
//         arr[index + 1] = temp;
//         swapped = true;
//       }
//     });
//   } while (swapped);
// }
