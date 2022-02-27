"use strict";
// ============ TASK 1 ==========================
// Написать функцию которая проверяет являются две строки анаграммой или нет
exports.__esModule = true;
// function checkIsAnogram(firstStr: string, secondStr: string): boolean {
//   if (firstStr.length !== secondStr.length) {
//     return false;
//   }
//   let firstWord: string = firstStr.toLowerCase();
//   let secondWord: string = secondStr.toLowerCase();
//   for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord.includes(secondWord[i])) {
//       let currentLetter: string = firstWord[i];
//       let length1: number = 0;
//       let length2: number = 0;
//       for (let j: number = 0; j < firstWord.length; j++) {
//         if (currentLetter === firstWord[j]) {
//           length1++;
//         }
//         if (currentLetter === secondWord[j]) {
//           length2++;
//         }
//       }
//       if (length1 !== length2) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
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
    var words = string.split(" ");
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) === i) {
            count++;
        }
    }
    return count;
}
function calculateWords(sentence) {
    var words = sentence.split(" ");
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
    return result.split("").reverse().join();
}
function toDec(num) {
    var result = 0;
    var arr = num.split("");
    for (var i = 0; i < arr.length; i += 1) {
        result += Number(arr[i]) * Math.pow(2, arr.length - 1 - i);
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
    var newArr = arr.slice(min - 1, max);
    var sum = 0;
    for (var i = 0; i < newArr.length; i += 1) {
        if (callback(newArr[i])) {
            sum += newArr[i];
        }
    }
    return sum;
}
function calcSumByMinMaxRecursion(arr, min, max, callback) {
    var newArr = arr.slice(min - 1, max);
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
