"use strict";

String.prototype.mySplit = function (seperator) {
  let str = this;
  let i = 0;
  let splitArray = [];

  while (i < str.length) {
    if (seperator && str[i] !== seperator) {
      let arrayItem = "";
      while (i < str.length && str[i] !== seperator) {
        arrayItem += str[i];
        i++;
      }
      splitArray.myPush(arrayItem);
    } else if (!seperator) {
      splitArray.myPush(str[i]);
    }
    i++;
  }
  return splitArray;
};

Array.prototype.myJoin = function () {
  let str = this;
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i];
  }
  return newString;
};

Array.prototype.myReverse = function () {
  const arr = this;
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.myPush(arr[i]);
  }
  return newArr;
};

Array.prototype.myPush = function (item) {
  const arr = this;
  const length = arr.length;
  arr[length] = item;
  return arr;
};

Array.prototype.mySlice = function (begin, end) {
  const arr = this;
  let newArr = [];
  for (let i = begin; i < end; i++) {
    newArr.myPush(arr[i]);
  }
  return newArr;
};

// ============ TASK 1 ==========================
// Написать функцию которая проверяет являются две строки анаграммой или нет

function checkIsAnogram(firstStr, secondStr) {
  if (typeof firstStr !== "string" || typeof secondStr !== "string") {
    throw new Error("String is not found");
  }
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  let firstWord = firstStr.toLowerCase();
  let secondWord = secondStr.toLowerCase();

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord.includes(secondWord[i])) {
      let currentLetter = firstWord[i];
      let length1 = 0;
      let length2 = 0;

      for (let j = 0; j < firstWord.length; j++) {
        if (currentLetter === firstWord[j]) {
          length1++;
        }
        if (currentLetter === secondWord[j]) {
          length2++;
        }
      }

      if (length1 !== length2) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// ============ TASK 3 ==========================
// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.
function calculateLength(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }
  let amount = 0;

  while (num > 0) {
    amount++;
    num = Math.floor(num / 10);
  }
  return amount;
}

function calculateLengthByRecursion(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  if (num > 10) {
    return 1 + calculateLengthByRecursion(num / 10);
  }
  return 1;
}

// ============ TASK 4 ==========================
// Реализовать функцию которая проверяет, является ли строка палиндромом

function checkIsPalindrom(str) {
  if (typeof str !== "string") {
    throw new Error("String is not found");
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// ============ TASK 5 ==========================
// Написать функцию которая вычисляет подсчет уникальных слов в предложении

function calculateUniqueWords(string) {
  if (typeof string !== "string") {
    throw new Error("String is not found");
  }

  const words = string.mySplit(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words.indexOf(words[i]) === i) {
      count++;
    }
  }
  return count;
}

// ============ TASK 6 ==========================
// Написать функцию которая вычисляет вхождение каждого слова в предложение

function calculateWords(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("String is not found");
  }
  const words = sentence.mySplit(" ");

  const result = {};
  for (let i = 0; i < words.length; i++) {
    if (!result.hasOwnProperty(words[i])) {
      result[words[i]] = 1;
    } else result[words[i]]++;
  }
  return result;
}

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

const RectangleConstructor = function (width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Number is invalid");
  }
  this.width = width;
  this.height = height;
};
RectangleConstructor.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};
RectangleConstructor.prototype.square = function () {
  return this.width * this.height;
};

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

const TriangleConstructor = function (height, base, side1, side2) {
  if (height <= 0 || base <= 0 || side1 <= 0 || side2 <= 0) {
    throw new Error("Number is invalid");
  }
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

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  square() {
    return Math.PI * this.radius ** 2;
  }
}

const CircleConstructor = function (radius) {
  if (radius <= 0) {
    throw new Error("String is not found");
  }
  this.radius = radius;
};

CircleConstructor.prototype.perimeter = function () {
  return 2 * Math.PI * this.radius;
};
CircleConstructor.prototype.square = function () {
  return Math.PI * this.radius ** 2;
};

// ============ TASK 8 ==========================
// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.

function calculateFactorial(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  let result = 1;
  for (let count = num; count > 1; count--) {
    result *= count;
  }
  return result;
}

function calculateFactorialByRecursion(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  if (num === 0) {
    return 1;
  }
  return num * calculateFactorialByRecursion(num - 1);
}

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

// ============ TASK 9 ==========================
// Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

function arrayElementsSum(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }
  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}

function arrayElementsSumRecursion(arr, callback, index) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }
  if (typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  index = index || 0;

  if (arr.length <= index) {
    return 0;
  }
  if (callback(arr[index])) {
    return arr[index] + arrayElementsSumRecursion(arr, callback, ++index);
  }
  return arrayElementsSumRecursion(arr, callback, ++index);
}

// ============ TASK 10 ==========================
// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа).

function countElements(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let amount = 0;

  for (const element of arr) {
    if (callback(element)) {
      amount++;
    }
  }
  return amount;
}

// ============ TASK 11==========================
// Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).

function toBinary(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  let number = num;
  let result = "";
  while (number > 0) {
    result += number % 2;
    number = (number - (number % 2)) / 2;
  }
  return result.mySplit("").myReverse().myJoin();
}

function toDec(num) {
  if (typeof num !== "string") {
    throw new Error("The number is invalid");
  }

  let result = 0;
  let arr = num.mySplit();

  for (let i = 0; i < arr.length; i += 1) {
    result += Number(arr[i]) * myMathPow(2, arr.length - 1 - i);
  }
  return result;
}

function myMathPow(base, pow) {
  if (typeof base !== "number" || typeof pow !== "number") {
    throw new Error("Number is not found");
  }

  let result = base;
  if (pow === 0) {
    return 1;
  }
  for (let i = pow - 1; i > 0; i--) {
    result *= base;
  }
  return result;
}

// ============ TASK 12==========================
// Пункты 9 и 10 выполнить для двумерных массивов.

function sum(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (callback(arr[i][j])) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

function countElementsQuantity(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let amount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (callback(arr[i][j])) {
        amount++;
      }
    }
  }
  return amount;
}

// ============ TASK 13==========================
// Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function calcSumByMinMax(arr, min, max, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Number is not found");
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let newArr = arr.mySlice(min - 1, max);
  let sum = 0;
  for (let i = 0; i < newArr.length; i += 1) {
    if (callback(newArr[i])) {
      sum += newArr[i];
    }
  }
  return sum;
}

function calcSumByMinMaxRecursion(arr, min, max, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Number is not found");
  }

  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let newArr = arr.mySlice(min - 1, max);
  let i = 0;
  let total = (function sum(newArr, i, callback) {
    let index = i || 0;
    if (newArr.length <= index) {
      return 0;
    }

    if (callback(newArr[i])) {
      return newArr[index] + sum(newArr, ++index, callback);
    }
    return sum(newArr, ++index, callback);
  })(newArr, i, callback);

  return total;
}

// ============ TASK 14==========================
// Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function countArithmeticAverage(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let sum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      sum += arr[i];
      len++;
    }
  }
  return Math.floor(sum / len);
}

function countDimensionalArrayArithmeticAverage(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Array is not found");
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let sum = 0;
  let len = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (callback(arr[i][j])) {
        sum += arr[i][j];
        len++;
      }
    }
  }

  return Math.floor(sum / len);
}

// ============ TASK 15==========================
// Транспонировать матрицу, сложить две матрицы.
function transposeMatrix(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
}

function addMatrixes(matrix1, matrix2) {
  if (matrix1.length === 0 || matrix2.length === 0) {
    return [];
  }
  let newMatrix = [];

  for (let i = 0; i < matrix1.length; i++) {
    newMatrix.myPush([]);
    for (let j = 0; j < matrix1.length; j++) {
      newMatrix[i].myPush(matrix1[i][j] + matrix2[i][j]);
    }
  }
  return newMatrix;
}

// ============ TASK 16==========================
// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function deleteString(matrix, value) {
  if (matrix.length === 0) {
    return [];
  }

  let index = 0;
  for (index = index; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][j] === value) {
        matrix.splice(index--, 1);
        break;
      }
    }
  }
  return matrix;
}

// console.log(deleteString([[1,0,1,1,1,],[2,0,2,2,2],[3,3,3,3,3],[4,4,4,4,0]],0))
// console.log(deleteString([[1,0],[2,2],[3,3],[4,4]],0))

function deleteColumn(matrix, value) {
  if (matrix.length === 0) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === value) {
        for (let k = 0; k < matrix.length; k++) {
          matrix[k].splice(j, 1);
        }
        j--;
      }
    }
    if (matrix[i].length === 0) {
      matrix.splice(i--, 1);
    }
  }
  return matrix;
}
// console.log(deleteColumn([[1,0,2,3,4,],[5,0,6,0,8],[9,10,11,12,13],[14,15,16,17,18]],0))
// console.log(deleteColumn([[1,0],[2,3],[4,5],[6,7]],0))
// ============ TASK 17==========================
// Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.

function countSum(matrix, callback) {
  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (callback(j, i)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function countZeroElements(matrix, callback) {
  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

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

function countElementsAverageValue(matrix, callback) {
  if (callback && typeof callback !== "function") {
    throw new Error("Callback is not found");
  }

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

function fibinacciRecursion(num) {
  if (num <= 1) {
    return num;
  }
  return fibinacciRecursion(num - 1) + fibinacciRecursion(num - 2);
}

const fibonacciMemo = (function () {
  let memo = {};

  return function fibonacci(num) {
    console.log(memo);
    if (memo[num]) {
      return memo[num];
    }

    if (num <= 1) {
      return 1;
    }

    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memo[num];
  };
})();

// ============ TASK 19 ==========================
// Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.
const trafficLights = {
  lights: ["red", "yellow", "green", "yellow"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      lights: this.lights,
      next() {
        index++;
        const isLastLight = index >= this.lights.length;
        if (isLastLight) {
          index = 0;
        }
        return {
          value: this.lights[index],
          done: false,
        };
      },
    };
  },
};

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

// ============ TASK 20 ==========================
// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
function checkIsPositive(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }
  return (num >> 31) & 1;
}
// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0.
function countBits(num) {
  if (typeof num !== "number") {
    throw new Error("Number is not found");
  }

  const bits = {
    0: 0,
    1: 0,
  };
  let number = num;

  while (number > 0) {
    bits[number % 2]++;
    number = (number - (number % 2)) / 2;
  }
  bits[0] = 32 - bits[1];

  return bits;
}

//  Написать свою реализацию для ~, двумя способами
function transformBitNotNumber(num) {
  return num ^ -1;
}

function transformBitNotNumber2(num) {
  let numeral = num;
  for (let i = 0; i < 32; i++) {
    numeral ^= 1 << i;
  }
  return numeral;
}

function transformBitNotNumber3(num) {
  return -num - 1;
}

// const person = {
//   name: "Rita",
// };

// function test(phone, email) {
//   this.phone = phone;
//   this.email = email;
//   console.log(`${this.name} ${phone} ${email}` );
//   return;
// }

// test.myBind(person,'1234567')()
// test.myBind(person,'1234567')('123@com')

// test.myCall(person,'123','123@com')

// console.log(a.myMap((el) => el + 2));

//   let ar = [1,2,2,3,4,4,5,5,6];
//   console.log(ar.myFilter((item, i, ar) => ar.indexOf(item)=== i))

// console.log(a.myFilter(el => el > 2));

// console.log(a.myFind(el => el > 3))

// a.myForEach((el) => console.log(el));
// console.log(a.myForEach((el) => console.log(el+1)));

// const [first, ...rest] = this;

// let acc = callback(accumulator, first);
// return rest.myReduce(callback, acc);

// console.log(
//   a.myReduce((total, el) => {
//     return total + el;
//   }, 0)
// );
// let b = ["hello", "world", "hello", "dogs", "hello", "cats"];
// console.log(
//   b.myReduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {})
// );

// console.log(
//   a.myReduce((acc, el) => {
//     acc.push(el * 2);
//     return acc;
//   }, [])
// );

// ====================
// let currentNode = this.root;
// while (currentNode) {
//   if (num < currentNode.number) {
//     if (!currentNode.left) {
//       currentNode.left = newNode;
//       return;
//     }
//     currentNode = currentNode.left;
//   } else {
//     if (!currentNode.right) {
//       currentNode.right = newNode;
//       return;
//     }
//     currentNode = currentNode.right;
//   }
// }

// let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];
// console.log(bubbleSort(arr));
// let ar = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];
// console.log(selectionSort(ar))

// class Node {
//   constructor(num) {
//     this.number = num;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(num) {
//     const newNode = new Node(num);
//     if (!this.root) {
//       this.root = newNode;
//       return;
//     }

//     function insertRecursion(currentNode) {
//       if (num < currentNode.number) {
//         if (currentNode.left) {
//           insertRecursion(currentNode.left);
//         } else {
//           currentNode.left = newNode;
//         }
//       } else {
//         if (currentNode.right) {
//           insertRecursion(currentNode.right);
//         } else {
//           currentNode.right = newNode;
//         }
//       }
//     }
//     insertRecursion(this.root);
//   }

//   search(num) {
//     function searchRecursion(currentNode) {
//       if (!currentNode) {
//         return null;
//       }
//       if (currentNode.number === num) {
//         return currentNode;
//       } else if (num < currentNode.number) {
//         return searchRecursion(currentNode.left);
//       } else {
//         return searchRecursion(currentNode.right);
//       }
//     }
//     return searchRecursion(this.root);
//   }

//   delete(num) {
//     function searchRecursion(currentNode, parentNode) {
//       if (!currentNode) {
//         return null;
//       }
//       if (currentNode.number === num) {
//         return { current: currentNode, parent: parentNode };
//       } else if (num < currentNode.number) {
//         return searchRecursion(currentNode.left, currentNode);
//       } else {
//         return searchRecursion(currentNode.right, currentNode);
//       }
//     }

//     function deleteNoChildNode(current, parent) {
//       if (!parent) {
//         this.root = null;
//       }
//       if (parent.left === current) {
//         parent.left = null;
//       } else {
//         parent.right = null;
//       }
//     }

//     function deleteOneChildNode(current, parent) {
//       let replacedNode = null;
//       if (!current.left) {
//         replacedNode = current.right;
//       } else {
//         replacedNode = current.left;
//       }
//       if (!parent) {
//         this.root = replacedNode;
//       } else if (parent.left === current) {
//         parent.left = replacedNode;
//       } else {
//         parent.right = replacedNode;
//       }
//     }

//     function deleteTwoChildrenNode(current, parent) {
//       let replacedNode = current.left;
//       let replacedNodeParent = current;
//       if (replacedNode.right) {
//         while (replacedNode.right) {
//           replacedNodeParent = replacedNode;
//           replacedNode = replacedNode.right;
//         }
//       }
//       deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
//       if (!parent) {
//         replacedNode.left = current.left;
//         replacedNode.right = current.right;
//         this.root = replacedNode;
//       } else {
//         if (parent.left === current) {
//           replacedNode.left = current.left;
//           replacedNode.right = current.right;
//           parent.left = replacedNode;
//         } else {
//           replacedNode.left = current.left;
//           replacedNode.right = current.right;
//           parent.right = replacedNode;
//         }
//       }
//     }

//     let result = searchRecursion(this.root);
//     let current = result.current;
//     let parent = result.parent;

//     if (!current.left && !current.right) {
//       deleteNoChildNode(current, parent);
//     } else if (!current.left || !current.right) {
//       deleteOneChildNode.call(this, current, parent);
//     } else {
//       deleteTwoChildrenNode.call(this, current, parent);
//     }
//   }
// }

// function insertNode(currentNode) {
//   if (num < currentNode.value) {
//     if (currentNode.left === null) {
//       currentNode.left = node;
//       return;
//     }
//     insertNode(currentNode.left);
//   } else {
//     if (currentNode.right === null) {
//       currentNode.right = node;
//       return;
//     }
//     insertNode(currentNode.right);
//   }
// }
// insertNode(this.value);

// delete(num) {
//   function searchNode(currentNode, parentNode) {
//     if (currentNode === null) {
//       return null;
//     }
//     if (currentNode.value === num) {
//       return { current: currentNode, parent: parentNode };
//     }
//     if (num < currentNode.value) {
//       return searchNode(currentNode.left, currentNode);
//     }
//     return searchNode(currentNode.right, currentNode);
//   }

//   function deleteNoChildNode(current, parent) {
//     if (!parent) {
//       this.value = null;
//       return;
//     }
//     if (parent.left === current) {
//       parent.left = null;
//       return;
//     }
//     if (parent.left === current) {
//       parent.right = null;
//     }
//   }

//   function deleteOneChildNode(current, parent) {
//     let replacedNode = null;
//     if (current.left === null) {
//       replacedNode = current.right;
//     } else {
//       replacedNode = current.left;
//     }
//     if (!parent) {
//       this.value = replacedNode;
//       return;
//     }
//     if (parent.left === current) {
//       parent.left = replacedNode;
//       return;
//     }
//     if (parent.right === current){
//       parent.right = replacedNode;
//     }
//   }

//   function deleteTwoChildrenNode(current, parent) {
//     let replacedNode = current.left;
//     let replacedNodeParent = current;
//     if (replacedNode.right) {
//       while (replacedNode.right) {
//         replacedNodeParent = replacedNode;
//         replacedNode = replacedNode.right;
//       }
//     }

//     deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
//     replacedNode.left = current.left;
//     replacedNode.right = current.right;

//     if (!parent) {
//       this.value = replacedNode;
//       return;
//     }
//     if (parent.left === current) {
//         parent.left = replacedNode;
//         return;
//     }
//     if (parent.right === current) {
//         parent.right = replacedNode;
//     }
//   }
//   let result = searchNode(this.value);
//   let current = result.current;
//   let parent = result.parent;

//   if (!current.left && !current.right) {
//     deleteNoChildNode.call(this,current, parent);
//     return;
//   }
//   if (!current.left || !current.right) {
//     deleteOneChildNode.call(this, current, parent);
//     return;
//   }
//    if (current.left || !current.right) {
//     deleteTwoChildrenNode.call(this, current, parent);
//   }
// }

// const tree = new TreeNode();
// tree.insert(5);
// tree.insert(2);
// tree.insert(3);
// tree.insert(1);
// tree.insert(2.5);
// tree.insert(10);
// tree.insert(13);
// tree.insert(9);
// tree.insert(12);
// tree.insert(11);
// tree.insert(15);
// console.log(tree.search(3));
// tree.delete(10);
// tree.delete(12);
// tree.delete(9);
// tree.delete(3);
// tree.delete(2);
// tree.delete(5);
// console.log(tree);

// function bubbleSort(row) {
//   for (let i = row.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (row[j] > row[j + 1]) {
//         let temp = row[j];
//         row[j] = row[j + 1];
//         row[j + 1] = temp;
//       }
//     }
//   }
//   return row;
// }

// function selectionSort(row) {
//   for (let i = 0; i < row.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < row.length; j++) {
//       if (row[j] < row[min]) {
//         min = j;
//       }
//       if (min !== i) {
//         [row[i], row[min]] = [row[min], row[i]];
//       }
//     }
//   }
//   return row;
// }

// let arr = [4, 1, 22, 34, 7, 5, 88, 6, 9, 3, 12, 2];
// let arr = [4, 1, 88, 2];
// let a = [{ a: 10 }, { a: -1 }, { a: 7 }, {a: 5}];
// console.log(arr.bubbleSort(arr));
// console.log(a.bubbleSort(a));

// console.log(arr.selectionSort(arr));
// console.log(a.selectionSort(a));
