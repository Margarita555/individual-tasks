Array.prototype.myFilter = function (callback){
    let arr = this;
    const filteredArr = [];
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i], i, arr)) {
        filteredArr.push(arr[i])}
    }
    return filteredArr;
  }
//   let arr = [1,2,2,3,4,4,5,5,6];
//   console.log(arr.myFilter((item, i, arr) => arr.indexOf(item)=== i))
 
const person ={
  name: 'Rita'
}

function test(phone){
  this.phone = phone;
  console.log(`${this.name} ${phone}`)
  // return `${this.name} ${this.phone}`
}
test.bind(person,'12345')()

Function.prototype.myBind = function(callback, context, ...rest){
  return function(...args){
  const uniqueId = Date.now().toString();
  context[uniqueId] = callback;
  const result = context[uniqueId](...rest,...args);
  delete context[uniqueId];
  return result;
}
}

// Function.prototype.myCall = function(callback, context, ...args){
//   const uniqueId = Date.now().toString();
//   context[uniqueId] = callback;
//   const result = context[uniqueId](...args);
//   delete context[uniqueId];
//   return result;
// }

// const exp = test.myCall(person, 123456)
// const exp2 = test.myBind(person)(123456)
// console.log(exp2())


