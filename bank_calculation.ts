// import fetchCurrencyRates from "./api-service";
import getRefs from "./refs";
const { totalFundsBtn, totalFunds } = getRefs();

totalFundsBtn.addEventListener("click", countBankTotalFunds);

interface IDebit {
  balance: number;
  activity: number;
  activityDate: string;
  cardExpiryDate: string;
  currency: string;
  id: string;
  accountId: string;
}

interface ICredit {
  balance: number;
  creditLimit: number;
  activity: number;
  activityDate: string;
  cardExpiryDate: string;
  currency: string;
  id: string;
  accountId: string;
}

interface IClient {
  id: string;
  name: string;
  registrationDate: string;
  isActive: boolean;
  accounts: {
    debit: IDebit[];
    credit?: ICredit[];
  };
}

export function fetchBank() {
  let bank: IClient[] = [];
  let clients: string | null = localStorage.getItem("bank");
  if (clients !== null) {
    bank = JSON.parse(clients);
  }
  return bank;
}

interface IRates {
  [key: string]: number;
}

async function exchangeCurrency(balance: number, currency: string) {
  const rate: number = await fetchCurrencyRates(currency).then(
    (rates: IRates) => {
      return rates[`USD_${currency}`];
    }
  );
  return (balance / 100) * rate;
}

async function countBankTotalFunds() {
  let bank: IClient[] = fetchBank();
  try {
    let debitTotal: number = 0;
    for (let i: number = 0; i < bank.length; i++) {
      for (let j: number = 0; j < bank[i].accounts.debit.length; j++) {
        let account: IDebit = bank[i].accounts.debit[j];
        const funds: number = account.balance + account.activity;
        let currency: string = account.currency;
        if (currency === "USD") {
          debitTotal += funds;
        } else {
          const exchangedFunds: number = await exchangeCurrency(
            funds,
            currency
          );
          debitTotal += exchangedFunds;
        }
      }
    }
    let creditTotal: number = 0;
    for (let i: number = 0; i < bank.length; i++) {
      for (let j: number = 0; j < bank[i].accounts.credit.length; j++) {
        let account: ICredit = bank[i].accounts.credit[j];
        const funds: number =
          account.balance + account.creditLimit + account.activity;
        let currency: string = account.currency;
        if (currency === "USD") {
          creditTotal += funds;
        } else {
          const exchangedFunds: number = await exchangeCurrency(
            funds,
            currency
          );
          creditTotal += exchangedFunds;
        }
      }
    }
    const total: number = debitTotal + creditTotal;
    totalFunds.innerText = total.toFixed(2);
    return total;
  } catch (error: any) {
    error({ text: "Error.Try again leter." });
  }
}

async function countClientsDebt(clientStatus: boolean) {
  try {
    let bank: IClient[] = fetchBank();
    let debtTotal: number = 0;
    for (let i: number = 0; i < bank.length; i++) {
      let flag: boolean =
        bank[i].isActive === clientStatus || !arguments.length;

      for (let j: number = 0; j < bank[i].accounts.credit.length; j++) {
        let account: ICredit = bank[i].accounts.credit[j];
        let debt: number = 0;
        if (flag && account.creditLimit > account.balance) {
          debt = account.creditLimit - account.balance;
        }
        let currency: string = account.currency;
        if (currency === "USD") {
          debtTotal += debt;
        } else {
          const exchangedDebt: number = await exchangeCurrency(debt, currency);
          debtTotal += exchangedDebt;
        }
      }
    }
    return debtTotal;
  } catch (error: any) {
    error({ text: "Error.Try again leter." });
  }
}

function countDebtHolders(clientStatus: boolean): number {
  let bank: IClient[] = fetchBank();
  let counter: number = 0;
  for (let i: number = 0; i < bank.length; i++) {
    for (let j: number = 0; j < bank[i].accounts.credit.length; j++) {
      let account: ICredit = bank[i].accounts.credit[j];
      if (
        bank[i].isActive === clientStatus &&
        account.creditLimit > account.balance
      ) {
        counter += 1;
      }
    }
  }
  return counter;
}
// ===========================================

const API_KEY: string = "0893e1cc2d0c91636005";

export default async function fetchCurrencyRates(
  currency: string
): Promise<{ [key: string]: number }> {
  return await fetch(
    `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=${API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((rate) => {
      if (rate.length === 0) {
        return Error;
      } else {
        return rate;
      }
    });
}
