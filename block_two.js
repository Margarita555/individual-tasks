/* ======================= Task 1 ==========================
 Написать свою реализацию функций bind, call
 */
Function.prototype.myBind = function (context, ...rest) {
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
  
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
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


Array.prototype.myReduce = function (callback, accumulator = 0) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  
  if (this.length === 0) {
    return accumulator;
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
}
