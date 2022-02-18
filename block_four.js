
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

const bank = [
  {
      name: "Voyskaya Vlada Vladimirovna",
      isActive: true,
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
            creditFunds: 30000,
          },
          creditLimit: 100000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
        },
      },
  },
  {
      name: "Voyskiy Vlad Vladimirovich",
      isActive: true,
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
            creditFunds: 30000,
          },
          creditLimit: 100000,
          activity: 5000,
          activityDate: "",
          cardExpiryDate: "",
          currency: "UAH",
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

async function countBankCashTotal() {
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
// countBankCashTotal();

// async function clientsDebtTotal(){
//   try {
//     let creditFundsTotal = 0;
//     for (let i = 0; i < bank.length; i++) {
//       // console.log(bank[i].client.accounts)

//       let creditFunds = bank[i].client.accounts.credit.balance.creditFunds;
//       const currency = bank[i].client.accounts.credit.currency;
//         console.log(currency, creditFunds);

//       const clientCreditFunds = await exchangeCurrency(creditFunds, currency);
//       creditFundsTotal += clientCreditFunds;
//     }
//     console.log(creditFundsTotal);
//     return creditFundsTotal;
//   } catch (e) {
//     error({ text: "Error.Try again leter." });
//   }
// }

// clientsDebtTotal();

// async function countInactiveClientsCreditFunds(){
//   try {
//     return creditFundsTotal = bank.reduce((total, client)=> {
//       let creditFunds = client.accounts.credit.balance.creditFunds;
//       const currency = client.accounts.credit.currency;
//       const exchangedCreditFunds = await exchangeCurrency(creditFunds, currency);
//       total += exchangedCreditFunds;
//       return total;
//     }, 0)
// // let creditFundsTotal = 0;
//     // for (let i = 0; i < bank.length; i++) {
//     //   // console.log(bank[i].client.accounts)

//     //   let creditFunds = bank[i].client.accounts.credit.balance.creditFunds;
//     //   const currency = bank[i].client.accounts.credit.currency;
//     //     console.log(currency, creditFunds);

//     //   const clientCreditFunds = await exchangeCurrency(creditFunds, currency);
//     //   creditFundsTotal += clientCreditFunds;
//     // }
  
//   } catch (e) {
//     error({ text: "Error.Try again leter." });
//   }
// }
// console.log(countInactiveClientsCreditFunds())

function countInactiveDebtHolders(){
  const inactiveClients = bank.filter(client => {
    return client.isActive && client.accounts.credit.balance.creditFunds !== 0}).length;
    console.log(inactiveClients)
}
countInactiveDebtHolders();