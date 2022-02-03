
function findAnogram(firstWord, secondWord){
    isLetterInBothWords = false;
    firstWordLetters = firstWord.split('');
    secondWordLetters = secondWord.split('');
      if(firstWord.length !== secondWord.length){
          return false};
  
      for(let i = 0; i < firstWordLetters.length; i+=1 ){
       if (firstWordLetters.includes(secondWordLetters[i])){
           let currentLetter  = firstWordLetters[i]
           
           console.log(currentLetter)
           
          let letterQuantityInFirstWord = firstWord.split(`${currentLetter}`).length-1;
          let letterQuantityInSecondWord = secondWord.split(`${currentLetter}`).length-1;
  
           if (letterQuantityInFirstWord !== letterQuantityInSecondWord){return false}
      isLetterInBothWords = true;
           
  
       } else return false;
      }
      return isLetterInBothWords
      
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
  // const Rectangle = function (){
  //     this.perimeter = 0;
  //     this.square = 0;
  
  //     this.calcPerimeter = function(height,width){
  //         this.perimeter = (width + height) * 2
  //         return this.perimeter
  //     };
  // };
  // const rectangle = new Rectangle(4,5)
  // console.log(rectangle.calcPerimeter)
  
  // class Rectangle {
  //     constructor(width, height){
  //     this.width = width;
  //     this.height = height;   
  //     this.perimeter = 0;
  //     this.square = 0; 
  //     }
      
  //     calcPerimeter (){
  //         console.log('r')
  //         this.perimeter = (this.width + this.height) * 2;
  //         return this.perimeter;
  //     };
  // };
  
  //  const rectangle = new Rectangle(4,5)
  // console.log(rectangle.calcPerimeter())
  // ============ TASK 8 ==========================
  function calculateFactorial(num){
      let result = 1;
          let count = 0;
          for(count = num; count>1; count-=1){
              console.log(count)
              result *= count
      }
      return result
  }
  console.log(calculateFactorial(4))
  function calculateFactorialByRecursion(num){
      if(num === 0){
          return 1;
      
      } else {
          return (num * calculateFactorialByRecursion(num -1))
      }
  }
  console.log(calculateFactorialByRecursion(4))
  
  const factorialByMemo = (function(){
      let memo ={};
       return function factorial(num){
          if(num === 0){
              return 1;
          }
  
          if (!memo[num]){
              memo[num] = factorial(num-1);
          }
        return num*memo[num]
      };
  })()
  
  console.log(factorialByMemo(4))
  
  
  // ============ TASK 9 ==========================
  function sum(arr, index){
      index = index || 0;
     
      if(arr.length <= index){
          return 0;
      }
        return ((arr[index]% 2 === 0? arr[index]: 0) + sum(arr, ++index));   
  }
  
  console.log(sum([1,2,3,4,6]))
  // ============ TASK 10 ==========================
  function countElements(arr, callback){
     let result = 0;
  
     for(const element of arr){
  
         if(callback(element)){
             result += element
         }
     }
     return result;
  }
  
  const isPositive = function (element){
     return element > 0;
  }
  
  const isNegative = function (element){
      return element < 0;
   }
  
   const isSimple = function (element){
      return element % element === 0 
   }
  // console.log(countElements([1,2,3,4,-6,0], isPositive));
  // console.log(countElements([1,2,3,4,-6,0], isNegative));
  // console.log(countElements([1,2,3,4,-6,0], isSimple));
  
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
  console.log(toBinary(25))
  
  function toDec(num){
      let result = 0;
      let arr = num.split('')
      console.log(arr)
      for(let i = 0; i< arr.length; i+=1){
          result += (Number(arr[i]) * Math.pow(2, arr.length-1-i))
      }
      return result 
  }
  console.log(toDec("0100"))