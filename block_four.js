const bank = {
    client = {
        name: "Voyskaya Vlada Vladimirovna",
        active: false,
        registrationDate: "",
        accounts: {
            debitAccount: {
                currentBalance: 500000,
                activity: false,
                activityDate: "",
                cardExpiryDate: "",
                currency: "USD",
            },
            creditAccount: {
                balance: {
                    personalFunds: 200000,
                    creditFunds: 0,
                },
                creditLimit: 100000,
                activity: false,
                activityDate: "",
                cardExpiryDate: "",
                currency: "USD",
            },
        },
    },
    client = {
        name: "Voyskiy Vlad Vladimirovich",
        active: false,
        registrationDate: "",
        accounts: {
            debit: {
                balance: 500000,
                activity: false,
                activityDate: "",
                cardExpiryDate: "",
                currency: "USD",
            },
            credit: {
                balance: {
                    personalFunds: 200000,
                    creditFunds: 0,
                },
                creditLimit: 100000,
                activity: false,
                activityDate: "",
                cardExpiryDate: "",
                currency: "USD",
            },
        },
    },
}

// function fetchCurrencyRate() { 
//         const fetchedCurrencyRate = await fetch(`https://restcountries.com/v2/name/${searchQuery}`)
//         .then(response => {
//         return response.json();
//         }).then(rate => {
//         return rate
//     })
// }


// async function bankCashTotal() {
//     const debitCurrency = bank.client.accounts.debitAccount.currency;
//     const creditCurrency = bank.client.accounts.creditAccount.currency;

    
//     try {
//         const currencyRate = await fetchCurrencyRate()
//         } catch (e) {
//         error({ text: 'Error.Try again leter.' })
//     }

//     const debitCurrentBalance = bank.reduce();
//     const creditCurrentBalance = bank.reduce();

//     const total = debitCurrentBalance + creditCurrentBalance + client.accounts.creditAccount.creditLimit + activity
    

//     return total
// }

/* ======================= Task 1 ==========================
 Написать свою реализацию бинарного дерева поиска. (Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению)
 */
//  class TreeNode {
//     constructor(num) {
//       this.value = num;
//       this.left = null;
//       this.right = null;
//     }
  
//       insert(num) {
//             if (!this.value) {
//         this.value = new TreeNode(num);
//         return;
//       }
//          console.log(this.value.value)
//          console.log(num)
//         if (num < this.value.value) {
//           if (this.value.left) {
//             console.log(this.value.left)
//             this.value.left.insert.call(this.value.left, num);
//           } else {
            
//             this.value.left = new TreeNode(num);
//             return
//           }
//         } 
        // else {
        //   if (currentNode.right) {
        //     insert(currentNode.right);
        //   } else {
        //     currentNode.right = new Node(num);
        //   }
        // }
    //   }
  
  // insert(num){
  //   // console.log(this.value)
  //       if (!this.value) {
  //       this.value = new TreeNode(num);
  //       return;
  //     }
  //     // console.log(this.value, this.value.value)
  //   if(num < this.value.value && this.value.left !== null){
  //     console.log(num, this.value.value)
  //     console.log(this.value.left)
  //       this.insert.call(this.value.left, num)
  //     // this.value.left.insert(num);
  //   } else if (num < this.value.value && this.value.left === null){
  //     console.log(this.left)
  //     console.log(num, this.value.value)
  //     this.left = new TreeNode(num);
  //     return;
  //   }
  //   if (num > this.value.value && this.value.right !== null){
  //     // console.log(this.value)
  //     this.value.right.insert.call(this.value.right.num);
  //   } else if (num > this.value.value){
  //     console.log(this.value)
  //     this.value.right = new TreeNode(num);
  //     return;
  //   }
  // }
  
  //   insert(num) {
  //     const node = new TreeNode(num);
  //     if (!this.value) {
  //       this.value = node;
  //       return;
  //     }
  
  //     let currentNode = this.value;
  
  //     while (currentNode) {
  //     if (num < currentNode.value) {
  //       if (currentNode.left === null) {
  //         currentNode.left = node;
  //         return;
  //       }
  //       currentNode = currentNode.left;
  //     } else {
  //       if (currentNode.right === null) {
  //         currentNode.right = node;
  //         return;
  //       }
  //       currentNode = currentNode.right;
  //     }
  //   }
  //  }
  
//    search(num){
//         if (!this.value) {
//         return false;
//       }
//       let varifiableValue = this.value;
  
//       while(varifiableValue){
//         if (num < varifiableValue.value){
//           varifiableValue = varifiableValue.left;
//         } else if (num > varifiableValue.value){
//           varifiableValue = varifiableValue.right;
//         } else if (varifiableValue.value === num){
//           return varifiableValue;
//         }
//       }
//    }
    
//     delete(num) {
//       let searchNode = {current: this.value, parent: null}
//       while(searchNode.current.value){
//         if (num < searchNode.current.value){
//           searchNode.parent = searchNode.current;
//           searchNode.current = searchNode.current.left;
//         } else if (num > searchNode.current.value){
//           searchNode.parent = searchNode.current;
//           searchNode.current = searchNode.current.right;
//         } else if (searchNode.current.value === num){
//           break;
//         }
//       }
   
//       let current = searchNode.current;
//       let parent = searchNode.parent;
   
//       if (!current.left && !current.right) {
//         deleteNoChildNode.call(this,current, parent);
//         return;
//       }
//       if (!current.left || !current.right) {
//         deleteOneChildNode.call(this, current, parent);
//         return;
//       }
//        if (current.left || !current.right) {
//         deleteTwoChildrenNode.call(this, current, parent);
//       }
  
//       function deleteNoChildNode(current, parent) {
//         if (!parent) {
//           this.value = null;
//           return;
//         }
//         if (parent.left === current) {
//           parent.left = null;
//           return;
//         } 
//         if (parent.right === current) {
//           parent.right = null;
//           return
//         }
//       }
  
//       function deleteOneChildNode(current, parent) {
//         let replacedNode = null;
//         if (current.left === null) {
//           replacedNode = current.right;
//         } else {
//           replacedNode = current.left;
//         }
//         if (!parent) {
//           this.value = replacedNode;
//           return;
//         }
//         if (parent.left === current) {
//           parent.left = replacedNode;
//           return;
//         }
//         if (parent.right === current){
//           parent.right = replacedNode;
//         }
//       }
  
//       function deleteTwoChildrenNode(current, parent) {
//         let replacedNode = current.left;
//         let replacedNodeParent = current;
//         if (replacedNode.right) {
//           while (replacedNode.right) {
//             replacedNodeParent = replacedNode;
//             replacedNode = replacedNode.right;
//           }
//         }
//         deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
//         replacedNode.left = current.left;
//         replacedNode.right = current.right;
     
//         if (!parent) {
//           this.value = replacedNode;
//           return;
//         }
//         if (parent.left === current) {
//             parent.left = replacedNode;
//             return;
//         } 
//         if (parent.right === current) {
//             parent.right = replacedNode;
//         } 
//       }
//     }
//   }
//   const tree = new TreeNode();
//   tree.insert(5);
//   tree.insert(2);
//   tree.insert(3);
  // tree.insert(1);
  // tree.insert(10);
  // tree.insert(12);
  // tree.insert(9);
  // console.log(tree.search(10));
  // tree.delete(10);
  // tree.delete(12);
  // tree.delete(9);
  // tree.delete(2);
  // tree.delete(5);
//   console.log(tree);