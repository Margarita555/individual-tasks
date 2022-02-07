"use-strict";

function mySplit(str, seperator) {
  let i = 0;
  let splitArray = [];

  while (i < str.length) {
    if (seperator && str[i] !== seperator) {
      let arrayItem = "";
      while (i < str.length && str[i] !== seperator) {
        arrayItem += str[i];
        i++;
      }
      splitArray.push(arrayItem);
    } else if (!seperator) {
      splitArray.push(str[i]);
    }
    i++;
  }
  return splitArray;
}

function myJoin(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i];
  }
  return newString;
}

function myReverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// ============ TASK 1 ==========================
// Написать функцию которая проверяет являются две строки анаграммой или нет

function findAnogram(firstWord, secondWord) {
  isLetterInBothWords = false;
  firstWordLetters = mySplit(firstWord);
  secondWordLetters = mySplit(secondWord);
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  for (let i = 0; i < firstWordLetters.length; i += 1) {
    if (firstWordLetters.includes(secondWordLetters[i])) {
      let currentLetter = firstWordLetters[i];

      let letterQuantityInFirstWord =
        mySplit(firstWord, `${currentLetter}`).length - 1;

      let letterQuantityInSecondWord =
        mySplit(firstWord, `${currentLetter}`).length - 1;

      if (letterQuantityInFirstWord !== letterQuantityInSecondWord) {
        return false;
      }
      isLetterInBothWords = true;
    } else return false;
  }
  return isLetterInBothWords;
}
// console.log(findAnogram("kaban", "banka"));
// ============ TASK 3 ==========================
// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.
function calculateLength(num) {
  let amount = 0;

  while (num > 0) {
    amount += 1;
    num = Math.floor(num / 10);
  }
  return amount;
}
// console.log(calculateLength(12345));

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
// console.log(calculateLengthByRecursion(12345));
// ============ TASK 4 ==========================
// Реализовать функцию которая проверяет, является ли строка палиндромом

function checkIsPalindrom(str) {
  let result = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      result = true;
    } else result = false;
  }
  return result;
}

// console.log(checkIsPalindrom("qwerewq"));
// ============ TASK 5 ==========================
// Написать функцию которая вычисляет подсчет уникальных слов в предложении

function calculateUniqueWords(sentence) {
  const words = mySplit(sentence, " ");
  const wordsObj = {};
  for (let i = 0; i < words.length; i++) {
    if (!wordsObj.hasOwnProperty(words[i])) {
      wordsObj[words[i]] = 1;
    } else wordsObj[words[i]] += 1;
  }
  const entries = Object.entries(wordsObj);
  let result = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] === 1) {
      result.push(entries[i][0]);
    }
  }
  return result;
}

// console.log(calculateUniqueWords("I love javascript I love react"));
// ============ TASK 6 ==========================
// Написать функцию которая вычисляет вхождение каждого слова в предложение

function calculateWords(sentence) {
  const words = mySplit(sentence, " ");
  const result = {};
  for (let i = 0; i < words.length; i++) {
    if (!result.hasOwnProperty(words[i])) {
      result[words[i]] = 1;
    } else result[words[i]] += 1;
  }
  return result;
}

// console.log(calculateWords("I love javascript I love react"));
// ============ TASK 7 ==========================
// Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.

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

const rectangle = new Rectangle(4, 5);
console.log(rectangle.perimeter());
console.log(rectangle.square());

const RectangleConstructor = function (width, height) {
  this.width = width;
  this.height = height;
};
RectangleConstructor.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};
RectangleConstructor.prototype.square = function () {
  return this.width * this.height;
};

// const rectangleConstructor = new RectangleConstructor(4, 5);
// console.log(rectangleConstructor.perimeter());
// console.log(rectangleConstructor.square());

class Triangle {
  constructor(height, base, side1, side2) {
    this.height = height;
    this.base = base;
    this.side1 = side1;
    this.side2 = side2;
  }

  perimeter() {
    return this.side1 + this.side2 + this.base;
  }
  square() {
    return (this.height * this.base) / 2;
  }
}

// const triangle = new Triangle(3, 6, 3.5, 5);
// console.log(triangle.perimeter());
// console.log(triangle.square());

const TriangleConstructor = function (height, base, side1, side2) {
  this.height = height;
  this.base = base;
  this.side1 = side1;
  this.side2 = side2;
};
TriangleConstructor.prototype.perimeter = function () {
  return this.side1 + this.side2 + this.base;
};
TriangleConstructor.prototype.square = function () {
  return (this.height * this.base) / 2;
};

// const triangleConstructor = new TriangleConstructor(3, 6, 3.5, 5);
// console.log(triangleConstructor.perimeter());
// console.log(triangleConstructor.square());

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  perimeter() {
    return 2 * 3.14 * this.radius;
  }
  square() {
    return 3.14 * this.radius ** 2;
  }
}

// const circle = new Circle(5);
// console.log(circle.perimeter());
// console.log(circle.square());

const CircleConstructor = function (radius) {
  this.radius = radius;
};

CircleConstructor.prototype.perimeter = function () {
  return 2 * 3.14 * this.radius;
};
CircleConstructor.prototype.square = function () {
  return 3.14 * this.radius ** 2;
};

// const circleConstructor = new CircleConstructor(5);
// console.log(circleConstructor.perimeter());
// console.log(circleConstructor.square());

// ============ TASK 8 ==========================
// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.

function calculateFactorial(num) {
  let result = 1;
  let count = 0;
  for (count = num; count > 1; count--) {
    result *= count;
  }
  return result;
}
console.log(calculateFactorial(4));

function calculateFactorialByRecursion(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * calculateFactorialByRecursion(num - 1);
  }
}
console.log(calculateFactorialByRecursion(4));

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

// console.log(factorialByMemo(4));

// ============ TASK 9 ==========================
// Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

function arrayElementsSum(arr, callback) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback && callback(arr[i])) {
      sum += arr[i];
    } else if (!callback) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(arrayElementsSum([1, 2, 3, 4, 5, 6]));
// console.log(
//   arrayElementsSum([1, 2, 3, 4, 5, 6], (element) => element % 2 === 0)
// );
// console.log(
//   arrayElementsSum([1, 2, 3, 4, 5, 6], (element) => element % 3 === 0)
// );
// console.log(arrayElementsSum([1, 2, 3, 4, 5, 6], (element) => element > 0));
// console.log(arrayElementsSum([1, 2, 3, 4, 5, 6], (element) => element < 0));

function arrayElementsSumRecursion(arr, callback, index) {
  index = index || 0;

  if (arr.length <= index) {
    return 0;
  }
  if (callback(arr[index])) {
    return arr[index] + arrayElementsSumRecursion(arr, callback, ++index);
  } else {
    return arrayElementsSumRecursion(arr, callback, ++index);
  }
}

// console.log(
//   arrayElementsSumRecursion([1, 2, 3, 4, 5, 6], (element) => element % 2 === 0)
// );
// console.log(
//   arrayElementsSumRecursion([1, 2, 3, 4, 5, 6], (element) => element % 3 === 0)
// );
// console.log(
//   arrayElementsSumRecursion([1, 2, 3, 4, 5, 6], (element) => element > 0)
// );
// console.log(
//   arrayElementsSumRecursion([1, 2, 3, 4, 5, 6], (element) => element < 0)
// );

// ============ TASK 10 ==========================
// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа).

function countElements(arr, callback) {
  let amount = 0;

  for (const element of arr) {
    if (callback(element)) {
      amount += 1;
    }
  }
  return amount;
}

// console.log(countElements([1, 2, 3, 4, -6, 0], (element) => element === 0));
// console.log(countElements([1, 2, 3, 4, -6, 0], (element) => element > 0));
// console.log(countElements([1, 2, 3, 4, -6, 0], (element) => element < 0));
// console.log(
//   countElements([1, 2, 3, 4, -6, 0, 7], (element) => {
//     for (let i = 0; i < element; i++) {
//       if (element % i === 0) {
//         return false;
//       } else return true;
//     }
//   })
// );

// ============ TASK 11==========================
// Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).

function toBinary(num) {
  let number = num;
  let result = "";
  while (number > 0) {
    result += number % 2;
    number = (number - (number % 2)) / 2;
  }
  return myJoin(myReverse(mySplit(result, "")));
}
// console.log(toBinary(25));

function toDec(num) {
  let result = 0;
  let arr = mySplit(num);

  for (let i = 0; i < arr.length; i += 1) {
    result += Number(arr[i]) * Math.pow(2, arr.length - 1 - i);
  }
  return result;
}
console.log(toDec("011"));
// ============ TASK 12==========================
// Пункты 9 и 10 выполнить для двумерных массивов.

function sum(arr, callback) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (callback && callback(arr[i][j])) {
        sum += arr[i][j];
      } else if (!callback) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
// console.log(
//   sum([
//     [1, 2],
//     [3, 4],
//     [6, 7],
//   ])
// );
// console.log(
//   sum(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element % 2 === 0
//   )
// );
// console.log(
//   sum(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element % 3 === 0
//   )
// );
// console.log(
//   sum(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element > 0
//   )
// );
// console.log(
//   sum(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element < 0
//   )
// );

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
// console.log(
//   countElementsQuantity(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element === 0
//   )
// );
// console.log(
//   countElementsQuantity(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => element > 0
//   )
// );
// console.log(
//   countElementsQuantity(
//     [
//       [1, 2],
//       [3, 4],
//       [6, -7],
//     ],
//     (element) => element < 0
//   )
// );
// console.log(
//   countElementsQuantity(
//     [
//       [1, 2],
//       [3, 4],
//       [6, 7],
//     ],
//     (element) => {
//       for (let i = 0; i < element; i++) {
//         if (element % i === 0) {
//           return false;
//         } else return true;
//       }
//     }
//   )
// );
// ============ TASK 13==========================
// Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function calcSumByMinMax(arr, min, max, callback) {
  let newArr = arr.slice(min - 1, max);
  let sum = 0;
  for (let i = 0; i < newArr.length; i += 1) {
    if (callback && callback(newArr[i])) {
      sum += newArr[i];
    } else if (!callback) {
      sum += newArr[i];
    }
  }
  return sum;
}
// console.log(calcSumByMinMax([1, 2, 3, 4, 5, 6], 2, 5));
// console.log(
//   calcSumByMinMax([1, 2, 3, 4, 5, 6], 2, 5, (elem) => elem % 3 === 0)
// );
// console.log(calcSumByMinMax([1, 2, 3, 4, 5, 6], 2, 5, (elem) => elem > 0));

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
// console.log(calcSumByMinMaxRecursion([1, 2, 3, 4, 5, 6], 2, 5));
// console.log(
//   calcSumByMinMaxRecursion([1, 2, 3, 4, 5, 6], 2, 5, (elem) => elem % 3 === 0)
// );
// console.log(
//   calcSumByMinMaxRecursion([1, 2, 3, 4, -5, 6], 2, 5, (elem) => elem > 0)
// );

// ============ TASK 14==========================
// Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function countAverageValue(arr, callback) {
  let sum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (callback && callback(arr[i])) {
      sum += arr[i];
      len += 1;
    } else if (!callback) {
      sum += arr[i];
      len = arr.length;
    }
  }
  return Math.floor(sum / len);
}
// console.log(countAverageValue([1, 2, 3, 4, 5]));
// console.log(countAverageValue([1, 2, 3, 4, 5], (elem) => elem % 2 === 0));
// console.log(countAverageValue([1, 2, 3, 4, 5], (elem) => elem % 2 !== 0));

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
        len += 1;
      }
    }
  }

  return Math.floor(sum / len);
}
// console.log(
//   countDimensionalArrayAverageValue([
//     [1, 2],
//     [3, 4],
//   ])
// );
// console.log(
//   countDimensionalArrayAverageValue(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     (elem) => elem % 2 === 0
//   )
// );
// console.log(
//   countDimensionalArrayAverageValue(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     (elem) => elem % 2 !== 0
//   )
// );
// ============ TASK 15==========================
// Транспонировать матрицу, сложить две матрицы.

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
// console.log(
//   addMatrixes(
//     [
//       [1, 1, 1],
//       [2, 2, 2],
//       [3, 3, 3],
//     ],
//     [
//       [4, 4, 4],
//       [5, 5, 5],
//       [6, 6, 6],
//     ]
//   )
// );
// ============ TASK 16==========================
// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

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
// Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.

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
        count += 1;
      }
    }
  }
  return count;
}

// console.log(
//   countZeroElements(
//     [
//       [1, 0, 1],
//       [2, 2, 0],
//       [0, 3, 0],
//     ],
//     (j, i) => j > i
//   )
// );

// console.log(
//   countZeroElements(
//     [
//       [1, 0, 1],
//       [2, 2, 0],
//       [0, 3, 0],
//     ],
//     (j, i) => j < i
//   )
// );

// console.log(
//   countZeroElements(
//     [
//       [1, 0, 1],
//       [2, 2, 0],
//       [0, 3, 0],
//     ],
//     (j, i) => j === i
//   )
// );

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

// console.log(
//   countElementsAverageValue(
//     [
//       [4, 5, 5],
//       [3, 4, 5],
//       [6, 6, 8],
//     ],
//     (j, i) => j > i
//   )
// );

// console.log(
//   countElementsAverageValue(
//     [
//       [4, 5, 5],
//       [3, 4, 5],
//       [6, 6, 8],
//     ],
//     (j, i) => j < i
//   )
// );

// console.log(
//   countElementsAverageValue(
//     [
//       [4, 5, 5],
//       [3, 4, 5],
//       [6, 6, 8],
//     ],
//     (j, i) => j === i
//   )
// );

// ============ TASK 18==========================
// Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.
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
}

function* fibonacciRecursion(max, prev = 0, next = 1) {
  if (max === 0) {
    return 0;
  }
  yield prev;
  yield* fibonacciRecursion(--max, next, next + prev);
}

// console.log([...fibonacciRecursion(8)]);

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
// console.log([...fibonacciMemo(8)]);

// ============ TASK 19 ==========================
// Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.
const trafficLights = {
  lights: ["red", "yellow", "green", "yellow"],
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
          this.i = this.i >= this.lights.length - 1 ? 0 : ++this.i;
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

// for (let item of trafficLights) {
//   console.log(item);
// }

const trafficLightsGenerator = {
  lights: ["red", "yellow", "green", "yellow"],
  max: 10,
  index: 0,
  [Symbol.iterator]: function* () {
    for (let i = 0; i < this.max; i++) {
      let result = this.lights[this.index];
      this.index = this.index >= this.lights.length - 1 ? 0 : ++this.index;
      yield result;
    }
  },
};

// for (let item of trafficLightsGenerator) {
//   console.log(item);
// }

// ============ TASK 20 ==========================
// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
function checkIsPositive(num) {
  if ((num >> 31) & 1) {
    return false;
  } else return true;
}
// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0.
function countBits(num) {
  const bits = {
    0: 0,
    1: 0,
  };
  let number = num;

  while (number > 0) {
    if (number % 2 === 0) {
      bits["0"] += 1;
    } else {
      bits["1"] += 1;
    }
    number = (number - (number % 2)) / 2;
  }
  return bits;
}
console.log(countBits(10));

//  Написать свою реализацию для ~, двумя способами
function transformBitNotNumber(num) {
  if (num > 0) {
    return -1 * (1 << 32) - num;
  }
  return -1 * (1 >> 32) + num;
}

console.log(transformBitNotNumber(-5));

function transformBitNotNumber2(num) {
  console.log((1 >> 32) - num);
  if (num >= 0) {
    return -1 * (num + 1);
  } else {
    return -1 * (-1 * num + 1);
  }
}
