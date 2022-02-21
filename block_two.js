/* ======================= Task 1 ==========================
 Написать свою реализацию функций bind, call
 */
Function.prototype.myBind = function (context, ...rest) {
  let fn = this;
  const callback = Symbol();
  return function (...args) {
    context[callback] = fn;
    const result = context[callback](...rest.concat(args));
    delete context[callback];
    return result;
  };
};

Function.prototype.myCall = function (context, ...args) {
  const callback = Symbol();
  context[callback] = this;
  const result = context[callback](...args);
  delete context[callback];
  return result;
};

/* ======================= Task 2 ==========================
 Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
 */
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
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

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, acc) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  let accumulator = acc || 0;

  if (this.length === 0) {
    return accumulator;
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
