/* ======================= Task 1 ==========================
 Написать свою реализацию функций bind, call
 */
Function.prototype.myBind = function (context, ...rest) {
  console.log(...rest);
  let callback = this;
  return function (...args) {
    const uniqueId = Date.now().toString();
    context[uniqueId] = callback;
    const result = context[uniqueId](...rest.concat(args));
    delete context[uniqueId];
    return result;
  };
};


Function.prototype.myCall = function (context, ...args) {
  let callback = this;
  const uniqueId = Date.now().toString();
  context[uniqueId] = callback;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};


/* ======================= Task 2 ==========================
 Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
 */
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};
let a = [1, 2, 3, 4, 5];


Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  let arr = this;
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};


Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};


Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  if (this === "null") {
    throw new Error("The array is invalid");
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};


Array.prototype.myReduce = function (callback, accumulator = 0) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  if (this.length === 0) {
    return accumulator;
  }
  let acc = accumulator;

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
}
