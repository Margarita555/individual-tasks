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
   for ( let i = 0; i< arr.length; i++){
      if(callback(arr[i], i, arr)){
        return arr[i];
      } 
   }
   return undefined;
}
// console.log(a.myFind(el => el > 7))

// Array.prototype.myReduce = function(callback,accumulator){
//   if (typeof callback !== "function") {
//     throw new Error("Callback is not a function");
//   }

//   let arr = this;
//    let acc = accumulator || 0;
//    console.log(acc)
//    for ( let i = 0; i< arr.length; i++){
//     //  if(!accumulator){
//     //    callback(arr[0], arr[i+1], i, arr)
//     //  }
//     console.log('el ',arr[i])
//     if(typeof acc === 'number'){
//     acc = callback(acc, arr[i], i, arr);
//     }
//     if( Array.isArray(acc)){
//       acc.push(callback(acc, arr[i], i, arr));
//       }
//     console.log(acc)
       
//    }
//    return acc;
// }

// console.log(a.myReduce((total, el)=> {total + el, 0}, 0))

console.log(a.myReduce((total, el)=> {total.push(el*2)}, []))



