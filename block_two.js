Array.prototype.myFilter = function (callback) {
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

const person = {
  name: "Rita",
};

function test(phone) {
  this.phone = phone;
  console.log(`${this.name} ${phone}`);
  // return `${this.name} ${this.phone}`
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

Function.prototype.myCall = function(context, ...args){
  let callback = this;
  const uniqueId = Date.now().toString();
  context[uniqueId] = callback;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
}

// test.myCall(person,'123')

Array.prototype.myMap = function(callback){
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let arr = this;
  const result = [];
   for ( let i = 0; i< arr.length; i++){
       result.push(callback(this[i], i, this))
   }
   return result;
}
let a = [1,2,3,4,5]
// console.log(a.myMap(el => el+2))

Array.prototype.myFilter = function(callback){
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let arr = this;
  const result = [];
   for ( let i = 0; i< arr.length; i++){
      if(callback(this[i], i, this))
       result.push(arr[i])
   }
   return result;
}
// console.log(a.myFilter(el => el > 2));

Array.prototype.myFind = function(callback){
  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let arr = this;
  let result; 
   for ( let i = 0; i< arr.length; i++){
      if(callback(arr[i], i, arr)){
        result = arr[i]
      } 
   }
   return result;
}

// Array.prototype.myReduce = function(callback){
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   let arr = this;
//   let acc = [];
//    for ( let i = 0; i< arr.length; i++){
//       if(callback(this[i], i, this))
//        result.push(arr[i])
//    }
//    return result;
// }

// function checkIsAnogram(firstStr, secondStr) {
//   if (typeof firstStr !== "string" || typeof secondStr !== "string") {
//     throw new Error("String is not found");
//   }
//   if (firstStr.length !== secondStr.length) {
//     return false;
//   }
//   firstStr = firstStr.toLowerCase();
//   secondStr = secondStr.toLowerCase();

//   let isLetterInBothStrings = false;
//   let firstWord = firstStr.mySplit();
//   let secondWord = secondStr.mySplit();

//   for (let i = 0; i < firstWord.length; i++) {
//     if (firstWord.includes(secondWord[i])) {
//       let currentLetter = firstWord[i];

//       let firstStrletterQuantity =
//         firstStr.mySplit(currentLetter).myJoin().length - 1;

//       let secondStrletterQuantity =
//         secondStr.mySplit(currentLetter).myJoin().length - 1;

//       if (firstStrletterQuantity !== secondStrletterQuantity) {
//         return false;
//       }
//       isLetterInBothStrings = true;
//     } else {
//       return false
//     };
//   }
//   return isLetterInBothStrings;
// }


