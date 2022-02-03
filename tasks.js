function findAnogram(firstWord, secondWord){
    isLetterInBothWords = false;
    firstWordLetters = firstWord.split('');
    secondWordLetters = secondWord.split('');
      if(firstWord.length !== secondWord.length){
          return false};
  
      for(let i = 0; i < firstWordLetters.length; i+=1 ){
       if (firstWordLetters.includes(secondWordLetters[i])){
        let currentLetter  = firstWordLetters[i];
           
        let letterQuantityInFirstWord = firstWord.split(`${currentLetter}`).length-1;
        let letterQuantityInSecondWord = secondWord.split(`${currentLetter}`).length-1;
  
           if (letterQuantityInFirstWord !== letterQuantityInSecondWord){return false}
      isLetterInBothWords = true;
           
       } else return false;
      }
      return isLetterInBothWords;   
  }
  console.log(findAnogram('kaban', 'banka'))
  // ============ TASK 3 ==========================
  
  function calculateLength(num){
  let numbersAmount = 0;
  
      function calc(currentNum){
      if (currentNum < 10){
          numbersAmount += 1;
          return numbersAmount;
      } 
          numbersAmount +=1
          calc(Math.floor(currentNum/10))
  }
  calc(num)
  return numbersAmount;
  }
  console.log(calculateLength(1234))
  // ============ TASK 4 ==========================
  function isPalindrom(str){
      let reversedString = str.split('').reverse().join('');
      return reversedString === str
  }
  console.log(isPalindrom('qwerewq'))
  
  // ============ TASK 5 ==========================
  function calculateUniqueWords(sentence){
      const words = sentence.split(' ');
      console.log(words)
      const uniqueWords = [];
      for(let i = 0; i < words.length; i+=1){
  if (!uniqueWords.includes(words[i]))
  uniqueWords.push(words[i])
      }
      return uniqueWords.length
  }
  
  console.log(calculateUniqueWords('I love javascript I love react'))
  // ============ TASK 6 ==========================
  function calculateWords(sentence){
      const words = sentence.split(' ');
      return words.reduce((acc, word) => {
          if(!acc.hasOwnProperty(word)){
              acc[word] = 1;
          }else acc[word] += 1;
          return acc
      }, {});
  }
  console.log(calculateWords('I love javascript I love react'))
  // ============ TASK 7 ==========================
//   const Rectangle = function (width, height){
//       this.width = width;
//       this.height = height;
//   };
//       Rectangle.prototype.perimeter = function(){    
//           return (this.width + this.height) * 2
//       };
//       Rectangle.prototype.square = function(){    
//         return this.width * this.height
//     };
  
//   const rectangle = new Rectangle(4,5);
//   console.log(rectangle.perimeter());
//   console.log(rectangle.square())
  
  class Rectangle {
      constructor(width, height){
      this.width = width;
      this.height = height;   
      }
      
      perimeter(){
          return (this.width + this.height) * 2;
      };
      square(){
        return this.width * this.height;
    };
  };
  
//   const rectangle = new Rectangle(4,5);
//   console.log(rectangle.perimeter());
//   console.log(rectangle.square())
  // ============ TASK 8 ==========================
  function calculateFactorial(num){
      let result = 1;
          let count = 0;
          for(count = num; count > 1; count-=1){
              result *= count
      }
      return result
  }
//   console.log(calculateFactorial(4))
  function calculateFactorialByRecursion(num){
      if(num === 0){
          return 1;
      
      } else {
          return (num * calculateFactorialByRecursion(num -1))
      }
  }
//   console.log(calculateFactorialByRecursion(4))
  
  const factorialByMemo = (function(){
      let memo ={};
       return function factorial(num){
          if(num === 0){
              return 1;
          }
  
          if (!memo[num]){
              memo[num] = factorial(num-1);
          }
        return num*memo[num];
      };
  })()
  
//   console.log(factorialByMemo(4))
  
  
  // ============ TASK 9 ==========================

function sum(arr, callback, index){
    index = index || 0;
   
    if(arr.length <= index){
        return 0;
    }
    if(callback(arr[index])){
        return arr[index] + sum(arr, callback, ++index);
    } else {
        return sum(arr, callback, ++index)}; 
}
//   console.log(sum([1,2,3,4,6], (element)=> element % 2 === 0));
//   console.log(sum([1,2,3,4,6], (element)=> element % 3 === 0));
//   console.log(sum([1,2,3,4,6], (element)=> element > 0));
//   console.log(sum([1,2,3,4,6], (element)=> element < 0));
  // ============ TASK 10 ==========================
  function countElements(arr, callback){
     let result = 0;
  
     for(const element of arr){
  
         if(callback(element)){
             result += 1
         }
     }
     return result;
  }
  
//   console.log(countElements([1,2,3,4,-6,0], (element)=> element === 0));
  // console.log(countElements([1,2,3,4,-6,0], (element)=> element > 0)));
  // console.log(countElements([1,2,3,4,-6,0], (element)=> element < 0)));
  // console.log(countElements([1,2,3,4,-6,0], (element)=> element % element === 0));
  
  // ============ TASK 11==========================
  
  function toBinary(num){
    let number = num;
    let result = '';
    while (number > 0 ){
        result += number % 2
        number = (number - (number % 2))/2
    }
      return result.split('').reverse().join('')
  
  }
//   console.log(toBinary(25))
  
  function toDec(num){
      let result = 0;
      let arr = num.split('')
      console.log(arr)
      for(let i = 0; i< arr.length; i+=1){
          result += (Number(arr[i]) * Math.pow(2, arr.length-1-i))
      }
      return result 
  }
//   console.log(toDec("0100"))
  // ============ TASK 12==========================
  function sum(arr, callback){
      let sum = 0;

      for(let i=0; i<arr.length; i+=1){
          for(let j = 0; j< arr[i].length; j+=1){
              if(callback && callback(arr[i][j])){
              sum += arr[i][j];
            }else if(!callback){
                sum += arr[i][j];
            }
          }
      }
      return sum

}

function sumByRecursion(arr, callback){
  index = index || 0;
  j = j || 0;
  if(arr.length <= index){
      return 0;
  }
  if(arr[index].length <= j){
    return 0;
}
  if(callback(arr[index][j])){
      return arr[index][j] + sum(arr, callback, ++index, ++j);
  } else {
      return sum(arr, callback, ++index, ++j)}; 
}

// console.log(sum([[1,2],[3,4],[6,7]]));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element % 2 === 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element % 3 === 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element > 0));
//   console.log(sum([[1,2],[3,4],[6,7]], (element)=> element < 0));

function countElementsQuantity(arr, callback){
    let amount = 0;

    for(let i=0; i<arr.length; i+=1){
        for(let j = 0; j< arr[i].length; j+=1){
            if(callback && callback(arr[i][j])){
            amount += 1;
          }else if(!callback){
            amount += 1;
          }
        }
    }
    return amount;
 }
 console.log(countElementsQuantity([[1,2],[3,4],[6,7]], (element)=> element === 0));
 console.log(countElementsQuantity([[1,2],[3,4],[6,7]], (element)=> element > 0));
 console.log(countElementsQuantity([[1,2],[3,4],[6,7]], (element)=> element < 0));
 console.log(countElementsQuantity([[1,2],[3,4],[6,7]], (element) => element%element === 0));
  // ============ TASK 13==========================
  function calcSumByMinMax(arr, min, max, callback){
    let newArr = arr.slice(min-1, max);
    let sum = 0;
    for(let i=0; i < newArr.length; i+=1){
        if(callback && callback(newArr[i])){
            console.log('y', callback(newArr[i]), newArr[i]) 
          sum += newArr[i];
        }else if(!callback){
        sum += newArr[i];
    };
    };
    return sum
  }
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5));
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5, (elem)=> elem % 3 === 0));
//   console.log(calcSumByMinMax([1,2,3,4,5,6], 2, 5, (elem)=> elem > 0));

function calcSumByMinMaxRecursion(arr, min, max, callback){
    let newArr = arr.slice(min-1, max);
    let i = 0;
      let total = (function sum(newArr, i, callback){
          let index = i || 0;
          if(newArr.length <= index){
              return 0
          };

        if(callback && callback(newArr[i])){
            return newArr[index] + sum(newArr, ++index, callback)
        } else if(callback && !callback(newArr[i])){
          return sum(newArr, ++index, callback)
        }
        else if(!callback){
          return newArr[index] + sum(newArr, ++index)
        };
      })(newArr, i, callback);

    return total
  };
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,5,6], 2, 5));
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,5,6], 2, 5, (elem)=> elem % 3 === 0));
//   console.log(calcSumByMinMaxRecursion([1,2,3,4,-5,6], 2, 5, (elem)=> elem > 0));

// function calcSumByMinMaxMemo(arr, min, max, callback){
//     let newArr = arr.slice(min-1, max);
//     let i = 0;
//     let memo = {};
    
    
//   return (function sum(newArr, i, callback, totalSum){
//           let index = i || 0;
//           if(newArr.length <= index){
//               return 0
//           };
//            let total = totalSum || 0;
//         if (!memo[total]){
//             total = sum(newArr, ++index, callback, total)
//             memo[total] = sum(newArr, ++index, callback, total);
//         }
//           return memo[total] + newArr[index];
//       })(newArr, i, callback);

//   };
//   console.log(calcSumByMinMaxMemo([1,2,3,4,5,6], 2, 5));



//   const factorialByMemo = (function(){
//     let memo ={};
//      return function factorial(num){
//         if(num === 0){
//             return 1;
//         }

//         if (!memo[num]){
//             memo[num] = factorial(num-1);
//         }
//       return num*memo[num];
//     };
// })()
  // ============ TASK 14==========================

  // ============ TASK 15==========================
function transposeMatrix(matrix){
    let newMatrix = [];
    for (let i=0; i < matrix.length; i+=1) {
        newMatrix.push([]);

    }
    for (let i=0; i < matrix.length; i++) {
        for (let j=0; j< matrix.length; j++) {
            newMatrix[j].push(matrix[i][j]);
        }; 
    }
    return newMatrix
}
console.log(transposeMatrix([[1,1,1],[2,2,2],[3,3,3]]))
  // ============ TASK 16==========================

  // ============ TASK 17==========================

  // ============ TASK 18==========================

  // ============ TASK 19==========================