const bank = [
  {
    client: {
      name: "Voyskaya Vlada Vladimirovna",
      active: false,
      registrationDate: "",
      accounts: {
        debit: {
          balance: 500000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
        },
        credit: {
          balance: {
            personalFunds: 200000,
            creditFunds: 0,
          },
          creditLimit: 100000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
        },
      },
    },
  },
  {
    client: {
      name: "Voyskiy Vlad Vladimirovich",
      active: false,
      registrationDate: "",
      accounts: {
        debit: {
          balance: 500000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
        },
        credit: {
          balance: {
            personalFunds: 200000,
            creditFunds: 0,
          },
          creditLimit: 100000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
        },
      },
    },
  },
];
const API_KEY = "7c8bbc90-8fcc-11ec-afa3-bfe597d9e008";

async function fetchCurrencyRates() {
  return await fetch(
    `https://freecurrencyapi.net/api/v2/latest?apikey=${API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((rate) => {
      //   console.log(rate.data);
      return rate.data;
    });
}
// console.log(fetchCurrencyRates());
async function exchangeCurrency(balance, currency) {
  //   console.log(currency, balance);
  const rate = await fetchCurrencyRates().then((rates) => {
    // console.log(rates);
    return rates[currency];
  });

  return (balance / 100) * rate;
  //    console.log(rate)
}
// exchangeCurrency(500000, 'UHA')

async function bankCashTotal() {
  try {
    let debitTotal = 0;
    for (let i = 0; i < bank.length; i++) {
      // console.log(bank[i].client.accounts)

      const balance = bank[i].client.accounts.debit.balance;
      const currency = bank[i].client.accounts.debit.currency;
      // console.log(currency, balance)
      const clientDebitBalance = await exchangeCurrency(balance, currency);
      debitTotal += clientDebitBalance;
      //   console.log(debitTotal);
    }

    let creditTotal = 0;
    for (let i = 0; i < bank.length; i++) {
      // console.log(bank[i].client.accounts)

      const personalFunds =
        bank[i].client.accounts.credit.balance.personalFunds;
      let creditFunds = bank[i].client.accounts.credit.balance.creditFunds;
      const currency = bank[i].client.accounts.credit.currency;
      //   console.log(currency, personalFunds, creditFunds);
      const balance = personalFunds + creditFunds;
      const clientCreditBalance = await exchangeCurrency(balance, currency);
      creditTotal += clientCreditBalance;
      //   console.log(debitTotal);
    }
    const total = debitTotal + creditTotal;
    return total;
    //  + client.accounts.creditAccount.creditLimit + activity
  } catch (e) {
    error({ text: "Error.Try again leter." });
  }
}
bankCashTotal();

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
// ================================================
// class TreeNode {
//     constructor(num) {
//       this.value = num;
//       this.left = null;
//       this.right = null;
//     }

//     insert(num) {
//       const node = new TreeNode(num);
//       if (!this.value) {
//         this.value = node;
//         return;
//       }
//       this._insertNode(this.value, node);
//     }

//     _insertNode(parent, node) {
//       if (node.value < parent.value && parent.left === null) {
//         parent.left = node;
//         return;
//       }
//       if (node.value < parent.value) {
//         this._insertNode(parent.left, node);
//       }
//       if (node.value > parent.value && parent.right === null) {
//         parent.right = node;
//         return;
//       }
//       if (node.value > parent.value) {
//         this._insertNode(parent.right, node);
//       }
//     }

//     search(num) {
//       if (!this.value) {
//         return false;
//       }
//       let value = this.value;

//       while (value) {
//         if (num < value.value) {
//           value = value.left;
//         } else if (num > value.value) {
//           value = value.right;
//         } else if (value.value === num) {
//           return value;
//         }
//       }
//     }

//     delete(num) {
//       let node = { current: this.value, parent: null };
//       while (node.current.value) {
//         if (num < node.current.value) {
//           node.parent = node.current;
//           node.current = node.current.left;
//         } else if (num > node.current.value) {
//           node.parent = node.current;
//           node.current = node.current.right;
//         } else if (node.current.value === num) {
//           break;
//         }
//       }

//       let current = node.current;
//       let parent = node.parent;

//       if (!current.left && !current.right) {
//         this._deleteNoChildNode.call(this, current, parent);
//         return;
//       }
//       if (!current.left || !current.right) {
//         this._deleteOneChildNode.call(this, current, parent);
//         return;
//       }
//       if (current.left || !current.right) {
//         this._deleteTwoChildrenNode.call(this, current, parent);
//       }
//     }

//     _deleteNoChildNode(current, parent) {
//       if (!parent) {
//         this.value = null;
//         return;
//       }
//       if (parent.left === current) {
//         parent.left = null;
//         return;
//       }
//       if (parent.right === current) {
//         parent.right = null;
//         return;
//       }
//     }

//     _deleteOneChildNode(current, parent) {
//       let replacedNode = null;
//       if (current.left === null) {
//         replacedNode = current.right;
//       } else {
//         replacedNode = current.left;
//       }
//       if (!parent) {
//         this.value = replacedNode;
//         return;
//       }
//       if (parent.left === current) {
//         parent.left = replacedNode;
//         return;
//       }
//       if (parent.right === current) {
//         parent.right = replacedNode;
//       }
//     }

//     _deleteTwoChildrenNode(current, parent) {
//       let replacedNode = current.left;
//       let replacedNodeParent = current;
//       if (replacedNode.right) {
//         while (replacedNode.right) {
//           replacedNodeParent = replacedNode;
//           replacedNode = replacedNode.right;
//         }
//       }
//       this._deleteOneChildNode.call(this, replacedNode, replacedNodeParent);
//       replacedNode.left = current.left;
//       replacedNode.right = current.right;

//       if (!parent) {
//         this.value = replacedNode;
//         return;
//       }
//       if (parent.left === current) {
//         parent.left = replacedNode;
//         return;
//       }
//       if (parent.right === current) {
//         parent.right = replacedNode;
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
