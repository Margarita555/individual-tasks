"use strict";
exports.__esModule = true;
String.prototype.mySplit = function (seperator) {
    var str = this;
    var i = 0;
    var splitArray = [];
    while (i < str.length) {
        if (seperator && str[i] !== seperator) {
            var arrayItem = "";
            while (i < str.length && str[i] !== seperator) {
                arrayItem += str[i];
                i++;
            }
            splitArray.myPush(arrayItem);
        }
        else if (!seperator) {
            splitArray.myPush(str[i]);
        }
        i++;
    }
    return splitArray;
};
Array.prototype.myJoin = function () {
    var str = this;
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        newString += str[i];
    }
    return newString;
};
Array.prototype.myReverse = function () {
    var arr = this;
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.myPush(arr[i]);
    }
    return newArr;
};
Array.prototype.myPush = function (item) {
    var arr = this;
    var length = arr.length;
    arr[length] = item;
    return arr;
};
Array.prototype.mySlice = function (begin, end) {
    var arr = this;
    var newArr = [];
    for (var i = begin; i < end; i++) {
        newArr.myPush(arr[i]);
    }
    return newArr;
};
// ============ TASK 1 ==========================
// Написать функцию которая проверяет являются две строки анаграммой или нет
function checkIsAnogram(firstStr, secondStr) {
    if (firstStr.length !== secondStr.length) {
        return false;
    }
    var firstWord = firstStr.toLowerCase();
    var secondWord = secondStr.toLowerCase();
    for (var i = 0; i < firstWord.length; i++) {
        if (firstWord.indexOf(secondWord[i]) !== -1) {
            var currentLetter = firstWord[i];
            var length1 = 0;
            var length2 = 0;
            for (var j = 0; j < firstWord.length; j++) {
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
        }
        else {
            return false;
        }
    }
    return true;
}
// ============ TASK 3 ==========================
// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.
function calculateLength(num) {
    var amount = 0;
    while (num > 0) {
        amount++;
        num = Math.floor(num / 10);
    }
    return amount;
}
function calculateLengthByRecursion(num) {
    if (num > 10) {
        return 1 + calculateLengthByRecursion(num / 10);
    }
    return 1;
}
// ============ TASK 4 ==========================
// Реализовать функцию которая проверяет, является ли строка палиндромом
function checkIsPalindrom(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// // ============ TASK 5 ==========================
// // Написать функцию которая вычисляет подсчет уникальных слов в предложении
function calculateUniqueWords(string) {
    var words = string.mySplit(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) === i) {
            count++;
        }
    }
    return count;
}
function calculateWords(sentence) {
    var words = sentence.mySplit(" ");
    var result = {};
    for (var i = 0; i < words.length; i++) {
        if (!result.hasOwnProperty(words[i])) {
            result[words[i]] = 1;
        }
        else
            result[words[i]]++;
    }
    return result;
}
// // ============ TASK 7 ==========================
// // Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.width + this.height) * 2;
    };
    Rectangle.prototype.square = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// interface IRect {
//   width: number;
//   height: number;
// }
var RectangleConstructor = function (width, height) {
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
var Triangle = /** @class */ (function () {
    function Triangle(height, base, side1, side2) {
        this.height = height;
        this.base = base;
        this.side1 = side1;
        this.side2 = side2;
    }
    Triangle.prototype.perimeter = function () {
        return this.side1 + this.side2 + this.base;
    };
    Triangle.prototype.square = function () {
        return (this.height * this.base) / 2;
    };
    return Triangle;
}());
var TriangleConstructor = function (height, base, side1, side2) {
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
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.square = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var CircleConstructor = function (radius) {
    if (radius <= 0) {
        throw new Error("Radius is not valid");
    }
    this.radius = radius;
};
CircleConstructor.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
};
CircleConstructor.prototype.square = function () {
    return Math.PI * Math.pow(this.radius, 2);
};
// // ============ TASK 8 ==========================
// // Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.
function calculateFactorial(num) {
    var result = 1;
    for (var count = num; count > 1; count--) {
        result *= count;
    }
    return result;
}
function calculateFactorialByRecursion(num) {
    if (num === 0) {
        return 1;
    }
    return num * calculateFactorialByRecursion(num - 1);
}
var factorialByMemo = (function () {
    var memo = {};
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
function arrayElementsSum(arr, callback) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}
function arrayElementsSumRecursion(arr, callback, index) {
    index = index || 0;
    if (arr.length <= index) {
        return 0;
    }
    if (callback(arr[index])) {
        return arr[index] + arrayElementsSumRecursion(arr, callback, ++index);
    }
    return arrayElementsSumRecursion(arr, callback, ++index);
}
// // ============ TASK 10 ==========================
// // Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа).
function countElements(arr, callback) {
    var amount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (callback(element)) {
            amount++;
        }
    }
    return amount;
}
// // ============ TASK 11==========================
// // Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел).
function toBinary(num) {
    var number = num;
    var result = "";
    while (number > 0) {
        result += number % 2;
        number = (number - (number % 2)) / 2;
    }
    return result.mySplit("").myReverse().myJoin();
}
function toDec(num) {
    var result = 0;
    var arr = num.mySplit("");
    for (var i = 0; i < arr.length; i += 1) {
        result += Number(arr[i]) * myMathPow(2, arr.length - 1 - i);
    }
    return result;
}
function myMathPow(base, pow) {
    var result = base;
    if (pow === 0) {
        return 1;
    }
    for (var i = pow - 1; i > 0; i--) {
        result *= base;
    }
    return result;
}
// // ============ TASK 12==========================
// // Пункты 9 и 10 выполнить для двумерных массивов.
function sum(arr, callback) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (callback(arr[i][j])) {
                sum += arr[i][j];
            }
        }
    }
    return sum;
}
function countElementsQuantity(arr, callback) {
    var amount = 0;
    for (var i = 0; i < arr.length; i += 1) {
        for (var j = 0; j < arr[i].length; j += 1) {
            if (callback(arr[i][j])) {
                amount++;
            }
        }
    }
    return amount;
}
// // ============ TASK 13==========================
// // Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.
function calcSumByMinMax(arr, min, max, callback) {
    var newArr = arr.mySlice(min - 1, max);
    var sum = 0;
    for (var i = 0; i < newArr.length; i += 1) {
        if (callback(newArr[i])) {
            sum += newArr[i];
        }
    }
    return sum;
}
function calcSumByMinMaxRecursion(arr, min, max, callback) {
    var newArr = arr.mySlice(min - 1, max);
    var i = 0;
    var total = (function sum(newArr, i, callback) {
        var index = i || 0;
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
// // ============ TASK 14==========================
// // Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).
function countArithmeticAverage(arr, callback) {
    var sum = 0;
    var len = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if (callback(arr[i])) {
            sum += arr[i];
            len++;
        }
    }
    return Math.floor(sum / len);
}
function countDimensionalArrayArithmeticAverage(arr, callback) {
    var sum = 0;
    var len = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (callback(arr[i][j])) {
                sum += arr[i][j];
                len++;
            }
        }
    }
    return Math.floor(sum / len);
}
// // ============ TASK 15==========================
// // Транспонировать матрицу, сложить две матрицы.
function transposeMatrix(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    var newMatrix = [];
    for (var i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix;
}
function addMatrixes(matrix1, matrix2) {
    if (matrix1.length === 0 || matrix2.length === 0) {
        return [];
    }
    var newMatrix = [];
    for (var i = 0; i < matrix1.length; i++) {
        newMatrix.push([]);
        for (var j = 0; j < matrix1.length; j++) {
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
        }
    }
    return newMatrix;
}
// // ============ TASK 16==========================
// // Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
function deleteString(matrix, value) {
    if (matrix.length === 0) {
        return [];
    }
    var index = 0;
    for (index = index; index < matrix.length; index++) {
        for (var j = 0; j < matrix[index].length; j++) {
            if (matrix[index][j] === value) {
                matrix.splice(index--, 1);
                break;
            }
        }
    }
    return matrix;
}
function deleteColumn(matrix, value) {
    if (matrix.length === 0) {
        return [];
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === value) {
                for (var k = 0; k < matrix.length; k++) {
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
// // ============ TASK 17==========================
// // Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.
function countSum(matrix, callback) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (callback(j, i)) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
function countZeroElements(matrix, callback) {
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (callback(j, i) && matrix[i][j] === 0) {
                count += 1;
            }
        }
    }
    return count;
}
function countElementsAverageValue(matrix, callback) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (callback(j, i)) {
                sum += matrix[i][j];
                count += 1;
            }
        }
    }
    return Math.floor(sum / count);
}
// // ============ TASK 18==========================
// // Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.
// interface IFibMemo {
//   min: number;
//   current: number;
//   [Symbol.iterator](): {
//     previous: number;
//     current: number;
//     followed: number;
//   };
// }
// const fibonacci: IFibMemo = {
//   min: 0,
//   current: 1,
//   [Symbol.iterator]() {
//     return {
//       previous: this.min,
//       current: this.current,
//       followed: this.current + this.min,
//       next() {
//         const result = {
//           value: this.previous,
//           done: false,
//         };
//         this.previous = this.current;
//         this.current = this.followed;
//         this.followed = this.previous + this.current;
//         return result;
//       },
//     };
//   },
// };
// interface IFibGenMemo {
//   previous: number;
//   current: number;
//   [Symbol.iterator](): void;
// }
// const fibonacciGenerator = {
//   previous: 0,
//   current: 1,
//   [Symbol.iterator]: function* () {
//     while (true) {
//       let temporaryCurrent = this.current;
//       let temporaryPrevious = this.previous;
//       this.current = this.current + this.previous;
//       this.previous = temporaryCurrent;
//       yield temporaryPrevious;
//     }
//   },
// };
function fibonacciRecursion(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}
var fibonacciMemo = (function () {
    var memo = {};
    return function fibonacci(num) {
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
// // ============ TASK 19 ==========================
// // Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.
// const trafficLights = {
//   lights: ["red", "yellow", "green", "yellow"],
//   [Symbol.iterator]() {
//     let index = 0;
//     return {
//       lights: this.lights,
//       next() {
//         index++;
//         const isLastLight = index >= this.lights.length;
//         if (isLastLight) {
//           index = 0;
//         }
//         return {
//           value: this.lights[index],
//           done: false,
//         };
//       },
//     };
//   },
// };
// const trafficLightsGenerator = {
//   lights: ["red", "yellow", "green", "yellow"],
//   max: 10,
//   index: 0,
//   [Symbol.iterator]: function* () {
//     for (let i = 0; i < this.max; i++) {
//       let result = this.lights[this.index];
//       this.index = this.index >= this.lights.length - 1 ? 0 : ++this.index;
//       yield result;
//     }
//   },
// };
// // ============ TASK 20 ==========================
// // Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
function checkIsPositive(num) {
    return (num >> 31) & 1;
}
function countBits(num) {
    var bits = {
        0: 0,
        1: 0
    };
    var number = num;
    while (number > 0) {
        bits[number % 2]++;
        number = (number - (number % 2)) / 2;
    }
    bits[0] = 32 - bits[1];
    return bits;
}
// //  Написать свою реализацию для ~, двумя способами
function transformBitNotNumber(num) {
    return num ^ -1;
}
function transformBitNotNumber2(num) {
    var numeral = num;
    for (var i = 0; i < 32; i++) {
        numeral ^= 1 << i;
    }
    return numeral;
}
function transformBitNotNumber3(num) {
    return -num - 1;
}
// Try changing the 'lib' compiler option to es2015 or later.
