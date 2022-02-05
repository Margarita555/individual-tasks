// ============ TASK 1 ==========================
function findAnogram(firstWord, secondWord) {
  isLetterInBothWords = false;
  firstWordLetters = firstWord.split("");
  secondWordLetters = secondWord.split("");
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  for (let i = 0; i < firstWordLetters.length; i += 1) {
    if (firstWordLetters.includes(secondWordLetters[i])) {
      let currentLetter = firstWordLetters[i];

      let letterQuantityInFirstWord =
        firstWord.split(`${currentLetter}`).length - 1;
      let letterQuantityInSecondWord =
        secondWord.split(`${currentLetter}`).length - 1;

      if (letterQuantityInFirstWord !== letterQuantityInSecondWord) {
        return false;
      }
      isLetterInBothWords = true;
    } else return false;
  }
  return isLetterInBothWords;
}
console.log(findAnogram("kaban", "banka"));
// ============ TASK 3 ==========================
function calculateLength(num) {
  let amount = 0;

  while (num > 0) {
    amount += 1;
    num = Math.floor(num / 10);
  }

  return amount;
}
console.log(calculateLength(12345));

function calculateLengthByRecursion(num) {
  let numbersAmount = 0;

  function calc(currentNum) {
    if (currentNum < 10) {
      numbersAmount += 1;
      return numbersAmount;
    }
    numbersAmount += 1;
    calc(Math.floor(currentNum / 10));
  }
  calc(num);
  return numbersAmount;
}
// console.log(calculateLengthByRecursion(1234));
// ============ TASK 4 ==========================
function isPalindrom(str) {
  let reversedString = str.split("").reverse().join("");
  return reversedString === str;
}
console.log(isPalindrom("qwerewq"));

// ============ TASK 5 ==========================
function calculateUniqueWords(sentence) {
  const words = sentence.split(" ");
  console.log(words);
  const uniqueWords = [];
  for (let i = 0; i < words.length; i += 1) {
    if (!uniqueWords.includes(words[i])) uniqueWords.push(words[i]);
  }
  return uniqueWords.length;
}

console.log(calculateUniqueWords("I love javascript I love react"));
// ============ TASK 6 ==========================
function calculateWords(sentence) {
  const words = sentence.split(" ");
  return words.reduce((acc, word) => {
    if (!acc.hasOwnProperty(word)) {
      acc[word] = 1;
    } else acc[word] += 1;
    return acc;
  }, {});
}
console.log(calculateWords("I love javascript I love react"));
// ============ TASK 7 ==========================
//   const Rectangle = function (width, height){
//       this.width = width;
//       this.height = height;
//   };
//       Rectangle.prototype.perimeter = function(){
//           return (this.width + this.height) * 2
//       };
//       Rectangle.prototype.square = function(){
//         return this.width * this.height
//     };

//   const rectangle = new Rectangle(4,5);
//   console.log(rectangle.perimeter());
//   console.log(rectangle.square())

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  perimeter() {
    return (this.width + this.height) * 2;
  }
  square() {
    return this.width * this.height;
  }
}

//   const rectangle = new Rectangle(4,5);
//   console.log(rectangle.perimeter());
//   console.log(rectangle.square())
// ============ TASK 8 ==========================
function calculateFactorial(num) {
  let result = 1;
  let count = 0;
  for (count = num; count > 1; count -= 1) {
    result *= count;
  }
  return result;
}
//   console.log(calculateFactorial(4))
function calculateFactorialByRecursion(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * calculateFactorialByRecursion(num - 1);
  }
}
//   console.log(calculateFactorialByRecursion(4))

const factorialByMemo = (function () {
  let memo = {};
  return function factorial(num) {
    if (num === 0) {
      return 1;
    }

    if (!memo[num]) {
      memo[num] = factorial(num - 1);
    }
    return num * memo[num];
  };
})();

//   console.log(factorialByMemo(4))

// ============ TASK 9 ==========================

function sum(arr, callback, index) {
  index = index || 0;

  if (arr.length <= index) {
    return 0;
  }
  if (callback(arr[index])) {
    return arr[index] + sum(arr, callback, ++index);
  } else {
    return sum(arr, callback, ++index);
  }
}
//   console.log(sum([1,2,3,4,6], (element)=> element % 2 === 0));
//   console.log(sum([1,2,3,4,6], (element)=> element % 3 === 0));
//   console.log(sum([1,2,3,4,6], (element)=> element > 0));
//   console.log(sum([1,2,3,4,6], (element)=> element < 0));
// ============ TASK 10 ==========================
function countElements(arr, callback) {
  let result = 0;

  for (const element of arr) {
    if (callback(element)) {
      result += 1;
    }
  }
  return result;
}

//   console.log(countElements([1,2,3,4,-6,0], (element)=> element === 0));
// console.log(countElements([1,2,3,4,-6,0], (element)=> element > 0)));
// console.log(countElements([1,2,3,4,-6,0], (element)=> element < 0)));
// console.log(countElements([1,2,3,4,-6,0], (element)=> element % element === 0));

// ============ TASK 11==========================

function toBinary(num) {
  let number = num;
  let result = "";
  while (number > 0) {
    result += number % 2;
    number = (number - (number % 2)) / 2;
  }
  return result.split("").reverse().join("");
}
//   console.log(toBinary(25))

function toDec(num) {
  let result = 0;
  let arr = num.split("");

  for (let i = 0; i < arr.length; i += 1) {
    result += Number(arr[i]) * Math.pow(2, arr.length - 1 - i);
  }
  return result;
}
//   console.log(toDec("0100"))
// ============ TASK 12==========================
function sum(arr, callback) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (callback && callback(arr[i][j])) {
        sum += arr[i][j];
      } else if (!callback) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

function sumByRecursion(arr, callback) {
  index = index || 0;
  j = j || 0;
  if (arr.length <= index) {
    return 0;
  }
  if (arr[index].length <= j) {
    return 0;
  }
  if (callback(arr[index][j])) {
    return arr[index][j] + sum(arr, callback, ++index, ++j);
  } else {
    return sum(arr, callback, ++index, ++j);
  }
}

// console.log(sum([[1,2],[3,4],[6,7]]));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element % 2 === 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element % 3 === 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element > 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element < 0));

function countElementsQuantity(arr, callback) {
  let amount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (callback && callback(arr[i][j])) {
        amount += 1;
      } else if (!callback) {
        amount += 1;
      }
    }
  }
  return amount;
}
console.log(
  countElementsQuantity(
    [
      [1, 2],
      [3, 4],
      [6, 7],
    ],
    (element) => element === 0
  )
);
console.log(
  countElementsQuantity(
    [
      [1, 2],
      [3, 4],
      [6, 7],
    ],
    (element) => element > 0
  )
);
console.log(
  countElementsQuantity(
    [
      [1, 2],
      [3, 4],
      [6, 7],
    ],
    (element) => element < 0
  )
);
console.log(
  countElementsQuantity(
    [
      [1, 2],
      [3, 4],
      [6, 7],
    ],
    (element) => element % element === 0
  )
);
// ============ TASK 13==========================
function calcSumByMinMax(arr, min, max, callback) {
  let newArr = arr.slice(min - 1, max);
  let sum = 0;
  for (let i = 0; i < newArr.length; i += 1) {
    if (callback && callback(newArr[i])) {
      console.log("y", callback(newArr[i]), newArr[i]);
      sum += newArr[i];
    } else if (!callback) {
      sum += newArr[i];
    }
  }
  return sum;
}
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5));
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5, (elem)=> elem % 3 === 0));
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5, (elem)=> elem > 0));

function calcSumByMinMaxRecursion(arr, min, max, callback) {
  let newArr = arr.slice(min - 1, max);
  let i = 0;
  let total = (function sum(newArr, i, callback) {
    let index = i || 0;
    if (newArr.length <= index) {
      return 0;
    }

    if (callback && callback(newArr[i])) {
      return newArr[index] + sum(newArr, ++index, callback);
    } else if (callback && !callback(newArr[i])) {
      return sum(newArr, ++index, callback);
    } else if (!callback) {
      return newArr[index] + sum(newArr, ++index);
    }
  })(newArr, i, callback);

  return total;
}
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,5,6], 2, 5));
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,5,6], 2, 5, (elem)=> elem % 3 === 0));
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,-5,6], 2, 5, (elem)=> elem > 0));

// function calcSumByMinMaxMemo(arr, min, max, callback){
//     let newArr = arr.slice(min-1, max);
//     let i = 0;
//     let memo = {};

//   return (function sum(newArr, i, callback, totalSum){
//           let index = i || 0;
//           if(newArr.length <= index){
//               return 0
//           };
//            let total = totalSum || 0;
//         if (!memo[total]){
//             total = sum(newArr, ++index, callback, total)
//             memo[total] = sum(newArr, ++index, callback, total);
//         }
//           return memo[total] + newArr[index];
//       })(newArr, i, callback);

//   };
//   console.log(calcSumByMinMaxMemo([1,2,3,4,5,6], 2, 5));

//   const factorialByMemo = (function(){
//     let memo ={};
//      return function factorial(num){
//         if(num === 0){
//             return 1;
//         }

//         if (!memo[num]){
//             memo[num] = factorial(num-1);
//         }
//       return num*memo[num];
//     };
// })()
// ============ TASK 14==========================
function countAverageValue(arr, callback) {
  let sum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (callback && callback(arr[i])) {
      sum += arr[i];
      len += 1;
      console.log(arr[i]);
    } else if (!callback) {
      sum += arr[i];
      len = arr.length;
    }
  }
  return Math.floor(sum / len);
}
//  console.log(countAverageValue([1,2,3,4,5]));
//  console.log(countAverageValue([1,2,3,4,5], (elem)=> elem % 2 === 0));
//  console.log(countAverageValue([1,2,3,4,5], (elem)=> elem % 2 !== 0));
function countDimensionalArrayAverageValue(arr, callback) {
  let sum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (callback && callback(arr[i][j])) {
        sum += arr[i][j];
        len += 1;
      } else if (!callback) {
        sum += arr[i][j];
        console.log(arr[i]);

        len += 1;
      }
    }
  }
  console.log(sum);
  return Math.floor(sum / len);
}
//   console.log(countDimensionalArrayAverageValue([[1,2],[3,4]]));
//  console.log(countDimensionalArrayAverageValue([[1,2],[3,4]], (elem)=> elem % 2 === 0));
//  console.log(countDimensionalArrayAverageValue([[1,2],[3,4]], (elem)=> elem % 2 !== 0));
// ============ TASK 15==========================
function transposeMatrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
}
// console.log(
//   transposeMatrix([
//     [1, 1, 1],
//     [2, 2, 2],
//     [3, 3, 3],
//   ])
// );

function addMatrixes(matrix1, matrix2) {
  let newMatrix = [];
  for (let i = 0; i < matrix1.length; i += 1) {
    newMatrix.push([]);
  }
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1.length; j++) {
      newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
    }
  }
  return newMatrix;
}
console.log(
  addMatrixes(
    [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ],
    [
      [4, 4, 4],
      [5, 5, 5],
      [6, 6, 6],
    ]
  )
);
// ============ TASK 16==========================
function deleteString(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        matrix.splice(i, 1);
      }
    }
  }
  return matrix;
}
// console.log(
//   deleteString([
//     [1, 1, 1],
//     [2, 0, 2],
//     [3, 3, 3],
//     [4, 4, 0],
//   ])
// );
function deleteColumn(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].splice(j, 1);
        }
      }
    }
  }
  return matrix;
}
// console.log(
//   deleteColumn([
//     [1, 1, 1],
//     [2, 0, 2],
//     [3, 3, 3],
//     [4, 4, 0],
//   ])
// );

// ============ TASK 17==========================

function countSum(matrix, callback) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (callback(j, i)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
// console.log(countSum([
//       [1, 0, 1],
//       [2, 2, 0],
//       [0, 3, 0],
//     ],(j,i)=> j>i));

// console.log(
//   countSum([
//     [1, 0, 1],
//     [2, 2, 0],
//     [0, 3, 0],
//   ],(j,i)=> j<i)
// );

// console.log(
//   countSum([
//     [1, 0, 1],
//     [2, 2, 0],
//     [0, 3, 0],
//   ],(j,i) => j=== i)
// );
function countZeroElements(matrix, callback) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (callback(j, i) && matrix[i][j] === 0) {
        // console.log(callback(j,i));
        count += 1;
      }
    }
  }
  return count;
}

console.log(
  countZeroElements(
    [
      [1, 0, 1],
      [2, 2, 0],
      [0, 3, 0],
    ],
    (j, i) => j > i
  )
);

console.log(
  countZeroElements(
    [
      [1, 0, 1],
      [2, 2, 0],
      [0, 3, 0],
    ],
    (j, i) => j < i
  )
);

console.log(
  countZeroElements(
    [
      [1, 0, 1],
      [2, 2, 0],
      [0, 3, 0],
    ],
    (j, i) => j === i
  )
);

function countElementsAverageValue(matrix, callback) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (callback(j, i)) {
        sum += matrix[i][j];
        count += 1;
      }
    }
  }
  return Math.floor(sum / count);
}

console.log(
  countElementsAverageValue(
    [
      [4, 5, 5],
      [3, 4, 5],
      [6, 6, 8],
    ],
    (j, i) => j > i
  )
);

console.log(
  countElementsAverageValue(
    [
      [4, 5, 5],
      [3, 4, 5],
      [6, 6, 8],
    ],
    (j, i) => j < i
  )
);

console.log(
  countElementsAverageValue(
    [
      [4, 5, 5],
      [3, 4, 5],
      [6, 6, 8],
    ],
    (j, i) => j === i
  )
);

// ============ TASK 18==========================
const fibonacci = {
  min: 0,
  current: 1,

  [Symbol.iterator]() {
    return {
      previous: this.min,
      current: this.current,
      followed: this.current + this.min,
      next() {
        const result = {
          value: this.previous,
          done: false,
        };
        this.previous = this.current;
        this.current = this.followed;
        this.followed = this.previous + this.current;
        return result;
      },
    };
  },
};
for (let item of fibonacci) {
  if (item > 30) {
    break;
  }
  console.log(item);
}

const fibonacciGenerator = {
  previous: 0,
  current: 1,

  [Symbol.iterator]: function* () {
    while (true) {
      let temporaryCurrent = this.current;
      let temporaryPrevious = this.previous;
      this.current = this.current + this.previous;
      this.previous = temporaryCurrent;
      yield temporaryPrevious;
    }
  },
};

for (let item of fibonacciGenerator) {
  if (item > 30) {
    break;
  }
  console.log(item);
}

function* fibonacciRecursion(max, prev = 0, next = 1) {
  if (max === 0) {
    return 0;
  }
  yield prev;
  yield* fibonacciRecursion(--max, next, next + prev);
}

console.log([...fibonacciRecursion(8)]);

function* fibonacciMemo(max, prev = 0, next = 1, memo) {
  if (max === 0) {
    return 0;
  }
  memo = memo || {};
  if (memo[max]) {
    return memo[max];
  }
  yield prev;
  yield* (memo[max] = fibonacciMemo(--max, next, prev + next, memo));
}
console.log([...fibonacciMemo(8)]);

// ============ TASK 19 ==========================
const trafficLights = {
  lights: ["red", "yellow", "green"],
  max: 10,
  [Symbol.iterator]() {
    return {
      lights: this.lights,
      max: this.max,
      index: 0,
      i: 0,
      next() {
        this.index++;
        if (this.index < this.max) {
          let result = {
            value: this.lights[this.i],
            done: false,
          };
          this.i = this.i > 1 ? 0 : ++this.i;
          return result;
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

for (let item of trafficLights) {
  console.log(item);
}

const trafficLightsGenerator = {
  lights: ["red", "yellow", "green"],
  max: 10,
  index: 0,
  [Symbol.iterator]: function* () {
    for (let i = 0; i < this.max; i++) {
      let result = this.lights[this.index];
      this.index = this.index > 1 ? 0 : ++this.index;
      yield result;
    }
  },
};

for (let item of trafficLightsGenerator) {
  console.log(item);
}

// ============ TASK 20 ==========================
function isPositive(num) {
  let number = num;

  while (number !== 1 && number !== -1) {
    number = Math.floor(number / 2);
  }
  // console.log(numbe);
  if (number === 1) {
    return true;
  }
  return false;
}
console.log(isPositive(15));
console.log(isPositive(-15));

function countBites(num) {
  let number = num;
  let numberArr = num.split("");
  console.log(numberArr);
  zeroBites = 0;

  for (let i = 0; i <= numberArr.length; i++) {
    if (numberArr[i] === 1) {
    }
  }
}
console.log(countBites("00001010"));
