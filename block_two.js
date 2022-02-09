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
  