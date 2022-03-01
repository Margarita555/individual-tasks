// interface Function {
//   myBind(params: any): any;
// }

// Function.prototype.myBind = function (context, ...rest: any[]) {
//   let fn = this;
//   const callback: unique symbol = Symbol();
//   return function (...args: any[]) {
//     context[callback] = fn;
//     const result = context[callback](...rest.concat(args));
//     delete context[callback];
//     return result;
//   };
// };

// interface Function {
//   myCall(params: any): any;
// }

// Function.prototype.myCall = function (context, ...args: any[]) {
//   const callback: unique symbol = Symbol();
//   context[callback] = this;
//   const result = context[callback](...args);
//   delete context[callback];
//   return result;
// };

// // /* ======================= Task 2 ==========================
// //  Написать свою реализацию функций для работы с массивами, которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
// //  */

// type MapCallback = (arrItem: any, index?: number, arr?: any[]) => any;

// interface Array<T> {
//   myMap(callback: MapCallback): any[];
// }

// // interface Array<T> {
// //   myMap<Input, Output>(callback: (arg: Input, i: number) => Output): Output[];
// // }

// Array.prototype.myMap = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   let result = [];
//   for (let i: number = 0; i < this.length; i++) {
//     result[i] = callback(this[i], i, this);
//   }
//   return result;
// };

// type FilterCallback = (arrItem: any, i?: number, arr?: any[]) => boolean;

// interface Array<T> {
//   myFilter(params: FilterCallback): any[];
// }

// Array.prototype.myFilter = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   const result = [];
//   for (let i: number = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// type FindCallback = (arrItem: any, i?: number, arr?: any[]) => any | undefined;

// interface Array<T> {
//   myFind(params: FindCallback): any[] | undefined;
// }

// Array.prototype.myFind = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   for (let i: number = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };

// type ForEachCallback = (arrItem: any, index?: number, arr?: any[]) => any;
// interface Array<T> {
//   myForEach(callback: ForEachCallback): void;
// }

// Array.prototype.myForEach = function (callback) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   for (let i: number = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// type ReduceCallback = (
//   accumulator: any,
//   arrItem: any,
//   index?: number,
//   arr?: any[]
// ) => any;

// interface Array<T> {
//   myReduce(callback: ReduceCallback, acc?: any): any;
// }

// Array.prototype.myReduce = function (callback, acc) {
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }
//   let accumulator = acc || 0;

//   if (this.length === 0) {
//     return accumulator;
//   }

//   for (let i: number = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };
