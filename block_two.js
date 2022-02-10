Array.prototype.myFilter = function (callback) {
  let arr = this;
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
//   let arr = [1,2,2,3,4,4,5,5,6];
//   console.log(arr.myFilter((item, i, arr) => arr.indexOf(item)=== i))

const person = {
  name: "Rita",
};

function test(phone) {
  this.phone = phone;
  console.log(`${this.name} ${phone}`);
  // return `${this.name} ${this.phone}`
}
// test.bind(person,'12345')()

Function.prototype.myBind = function (context, ...rest) {
  let callback = this;
  return function (...args) {
    const uniqueId = Date.now().toString();
    context[uniqueId] = callback;
    const result = context[uniqueId](...rest, ...args);
    delete context[uniqueId];
    return result;
  };
};

// test.myBind(person,'1234567')()

// Function.prototype.myCall = function(callback, context, ...args){
//   const uniqueId = Date.now().toString();
//   context[uniqueId] = callback;
//   const result = context[uniqueId](...args);
//   delete context[uniqueId];
//   return result;
// }

// test.myCall(person,'12345')()
// const exp = test.myCall(person, 123456)
const exp2 = test.myBind(person, 123456);
// console.log(exp2())

// function checkIsAnogram(firstStr, secondStr) {
//   if (typeof firstStr !== "string" || typeof secondStr !== "string") {
//     throw new Error("String is not found");
//   }
//   if (firstStr.length !== secondStr.length) {
//     return false;
//   }
//   firstStr = firstStr.toLowerCase();
//   secondStr = secondStr.toLowerCase();

//   let isLetterInBothStrings = false;
//   let firstWord = firstStr.mySplit();
//   let secondWord = secondStr.mySplit();

//   for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord.includes(secondWord[i])) {
//       let currentLetter = firstWord[i];

//       let firstStrletterQuantity =
//         firstStr.mySplit(currentLetter).myJoin().length - 1;

//       let secondStrletterQuantity =
//         secondStr.mySplit(currentLetter).myJoin().length - 1;

//       if (firstStrletterQuantity !== secondStrletterQuantity) {
//         return false;
//       }
//       isLetterInBothStrings = true;
//     } else {
//       return false
//     };
//   }
//   return isLetterInBothStrings;
// }
// function transposeMatrix(matrix) {
//   if (!matrix.length) {
//     return [];
//   }
//   let newMatrix = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     newMatrix.myPush([]);
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       newMatrix[j].myPush(matrix[i][j]);
//     }
//   }
//   return newMatrix;
// }

// console.log(
//   transposeMatrix([
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//   ])
// );
