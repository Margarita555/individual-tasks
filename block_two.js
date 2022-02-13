/* ======================= Task 1 ==========================
 Написать свою реализацию функций bind, call
 */
const person = {
  name: "Rita",
};

function test(phone) {
  this.phone = phone;
  // console.log(`${this.name} ${phone}`);
  return;
}
// test.bind(person,'12345')()

Function.prototype.myBind = function (context, ...rest) {
  let callback = this;
  return function (...args) {
    const uniqueId = Date.now().toString();
    context[uniqueId] = callback;
    const result = context[uniqueId](...rest, ...args);
    delete context[uniqueId];
    return result;
  };
};

// test.myBind(person,'1234567')()

Function.prototype.myCall = function (context, ...args) {
  let callback = this;
  const uniqueId = Date.now().toString();
  context[uniqueId] = callback;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};

// test.myCall(person,'123')
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
// console.log(a.myMap((el) => el + 2));

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
//   let arr = [1,2,2,3,4,4,5,5,6];
//   console.log(arr.myFilter((item, i, arr) => arr.indexOf(item)=== i))

// console.log(a.myFilter(el => el > 2));

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
// console.log(a.myFind(el => el > 7))

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
// a.myForEach((el) => console.log(el));
// console.log(a.myForEach((el) => console.log(el)));

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
  // const [first, ...rest] = this;

  // let acc = callback(accumulator, first);
  // return rest.myReduce(callback, acc);
};

// console.log(
//   a.myReduce((total, el) => {
//     return total + el;
//   }, 0)
// );
let b = ["hello", "world", "hello", "dogs", "hello", "cats"];
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
