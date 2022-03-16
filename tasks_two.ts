interface Function {
  myBind(context: any, ...rest: unknown[]): unknown;
}

Function.prototype.myBind = function (context, ...rest) {
  let fn = this;
  const callback: unique symbol = Symbol();
  return function (...args: any[]) {
    context[callback] = fn;
    const result = context[callback](...rest.concat(args));
    delete context[callback];
    return result;
  };
};

interface Function {
  myCall(context: any): unknown;
}

Function.prototype.myCall = function (context, ...args: unknown[]) {
  const callback: unique symbol = Symbol();
  context[callback] = this;
  const result = context[callback](...args);
  delete context[callback];
  return result;
};

//  Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
//  */

interface Array<T> {
  myMap(callback: (arrItem: T, index?: number, arr?: T[]) => any): any[];
}

// interface Array<T> {
//   myMap<Input, Output>(callback: (arg: Input, i: number) => Output): Output[];
// }

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let result = [];
  for (let i: number = 0; i < this.length; i++) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

interface Array<T> {
  myFilter(callback: (arrItem: T, i?: number, arr?: T[]) => boolean): T[];
}

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const result = [];
  for (let i: number = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// type FindCallback = (arrItem: any, i?: number, arr?: any[]) => any | undefined;

interface Array<T> {
  myFind(
    callback: (arrItem: T, i?: number, arr?: T[]) => T | undefined
  ): T[] | undefined;
}

Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  for (let i: number = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

interface Array<T> {
  myForEach(callback: (arrItem: T, index?: number, arr?: T[]) => void): void;
}

Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  for (let i: number = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// type ReduceCallback = <Type>(
//   accumulator: Type,
//   arrItem: any,
//   index?: number,
//   arr?: any[]
// ) => Type;

interface Array<T> {
  myReduce<Type>(
    callback: (
      accumulator: Type,
      arrItem: T,
      index?: number,
      arr?: T[]
    ) => Type,
    acc?: any
  ): Type;
}

Array.prototype.myReduce = function (callback, acc) {
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }
  let accumulator = acc || 0;

  if (this.length === 0) {
    return accumulator;
  }

  for (let i: number = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
