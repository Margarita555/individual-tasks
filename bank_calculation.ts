// import fetchCurrencyRates from "./api-service";
// import getRefs from "./refs";
// const { totalFundsBtn, totalFunds } = getRefs();

// totalFundsBtn.addEventListener("click", countBankTotalFunds);

interface IBank {
  id: number;
  name: string;
  registrationDate: string;
  isActive: boolean;
  accounts: {
    debit: [];
    credit: [];
  };
}

export function fetchBank() {
  let bank: Object[] = [];
  let clients: string | null = localStorage.getItem("bank");
  if (clients !== null) {
    bank = JSON.parse(clients);
  }
  return bank;
}

interface IRates {
  [key: string]: number;
}

// async function exchangeCurrency(balance: number, currency: string) {
//   const rate: number = await fetchCurrencyRates(currency).then(
//     (rates: IRates) => {
//       return rates[`USD_${currency}`];
//     }
//   );
//   return (balance / 100) * rate;
// }

// async function countBankTotalFunds() {
//   let bank: Object[] = fetchBank();
//   try {
//     let debitTotal: number = 0;
//     for (let i: number = 0; i < bank.length; i++) {
//       for (let j: number = 0; j < bank[i].accounts.debit.length; j++) {
//         let account = bank[i].accounts.debit[j];
//         const funds = account.balance + account.activity;
//         let currency = account.currency;
//         if (currency === "USD") {
//           debitTotal += funds;
//         } else {
//           const exchangedFunds = await exchangeCurrency(funds, currency);
//           debitTotal += exchangedFunds;
//         }
//       }
//     }
//     let creditTotal = 0;
//     for (let i = 0; i < bank.length; i++) {
//       for (let j = 0; j < bank[i].accounts.credit.length; j++) {
//         let account = bank[i].accounts.credit[j];
//         const funds = account.balance + account.creditLimit + account.activity;
//         let currency = account.currency;
//         if (currency === "USD") {
//           creditTotal += funds;
//         } else {
//           const exchangedFunds = await exchangeCurrency(funds, currency);
//           creditTotal += exchangedFunds;
//         }
//       }
//     }
//     const total = debitTotal + creditTotal;
//     totalFunds.innerText = total.toFixed(2);
//     return total;
//   } catch (e) {
//     error({ text: "Error.Try again leter." });
//   }
// }

// async function countClientsDebt(clientStatus: boolean) {
//   try {
//     let bank = fetchBank();
//     let debtTotal = 0;
//     for (let i = 0; i < bank.length; i++) {
//       let flag = bank[i].isActive === clientStatus || !arguments.length;

//       for (let j = 0; j < bank[i].accounts.credit.length; j++) {
//         let account = bank[i].accounts.credit[j];
//         let debt = 0;
//         if (flag && account.creditLimit > account.balance) {
//           debt = account.creditLimit - account.balance;
//         }
//         let currency = account.currency;
//         if (currency === "USD") {
//           debtTotal += debt;
//         } else {
//           const exchangedDebt = await exchangeCurrency(debt, currency);
//           debtTotal += exchangedDebt;
//         }
//       }
//     }
//     return debtTotal;
//   } catch (e) {
//     error({ text: "Error.Try again leter." });
//   }
// }

// function countDebtHolders(clientStatus: boolean): number {
//   let bank = fetchBank();
//   let counter = 0;
//   for (let i = 0; i < bank.length; i++) {
//     for (let j = 0; j < bank[i].accounts.credit.length; j++) {
//       let account = bank[i].accounts.credit[j];
//       if (
//         bank[i].isActive === clientStatus &&
//         account.creditLimit > account.balance
//       ) {
//         counter += 1;
//       }
//     }
//   }
//   return counter;
// }
