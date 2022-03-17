import bankTemplate from "../templates/bank-markup.hbs";
import debitTemplate from "../templates/debit-markup.hbs";
import creditTemplate from "../templates/credit-markup.hbs";
import { nanoid } from "nanoid";
import { fetchBank } from "./calculation";
import getRefs from "./refs";
const { form, debitForm, creditForm, bankContainer } = getRefs();

let bank = fetchBank();
renderBank(bank);

form.addEventListener("submit", onFormSubmit);
debitForm.addEventListener("submit", onDebitFormSubmit);
creditForm.addEventListener("submit", onCreditFormSubmit);
bankContainer.addEventListener("click", onDeleteBtnClick);
bankContainer.addEventListener("click", onDebitAccountClick);
bankContainer.addEventListener("click", onCreditAccountClick);
bankContainer.addEventListener("click", onSaveClientDataClick);
bankContainer.addEventListener("click", onSaveDebitAccountClick);
bankContainer.addEventListener("click", onSaveCreditAccountClick);
bankContainer.addEventListener("click", onDeleteDebitAccountlick);
bankContainer.addEventListener("click", onDeleteCreditAccountClick);

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
    debit?: IDebit[];
    credit?: ICredit[];
  };
}

function renderBank(bank: IClient[]): void {
  bankContainer.innerHTML = "";
  const bankMarkup = bankTemplate(bank);
  bankContainer.insertAdjacentHTML("beforeend", bankMarkup);
}

function onFormSubmit(event: any) {
  event.preventDefault();
  const formData: FormData = new FormData(event.target.closest("form"));
  const name: FormDataEntryValue | null = formData.get("name");
  const registrationDate: FormDataEntryValue | null = formData.get("date");
  const isActive: boolean = formData.get("isActive") === "true";
  const id: string = nanoid();

  const client = {
    id,
    name,
    registrationDate,
    isActive,
    accounts: {
      debit: [],
      credit: [],
    },
  };
  bank.push(client);
  localStorage.setItem("bank", JSON.stringify(bank));
  renderBank(bank);
  form.reset();
}

function onDebitFormSubmit(event: any) {
  event.preventDefault();
  const formData: FormData = new FormData(event.target.closest("form"));
  const id: FormDataEntryValue | null = formData.get("id");
  const balance: number = Number(formData.get("balance"));
  const activity: number = Number(formData.get("activity"));
  const activityDate: FormDataEntryValue | null = formData.get("activityDate");
  const cardExpiryDate: FormDataEntryValue | null =
    formData.get("cardExpiryDate");
  const currency: FormDataEntryValue | null = formData.get("currency");
  const accountId: FormDataEntryValue | null = formData.get("accountId");

  const debitAccount = {
    balance,
    activity,
    activityDate,
    cardExpiryDate,
    currency,
    id,
    accountId,
  };
  const client = bank.find((client: IClient) => id == client.id);
  client.accounts.debit.push(debitAccount);

  localStorage.setItem("bank", JSON.stringify(bank));
  debitForm.reset();
}

function onCreditFormSubmit(event: any) {
  event.preventDefault();
  const formData = new FormData(event.target.closest("form"));

  const id = formData.get("id");
  const balance = Number(formData.get("balance"));
  const activity = Number(formData.get("activity"));
  const activityDate = formData.get("activityDate");
  const cardExpiryDate = formData.get("cardExpiryDate");
  const currency = formData.get("currency");
  const creditLimit = Number(formData.get("creditLimit"));
  const accountId = formData.get("accountId");

  const creditAccount = {
    balance,
    creditLimit,
    activity,
    activityDate,
    cardExpiryDate,
    currency,
    id,
    accountId,
  };
  const client = bank.find((client: IClient) => id == client.id);
  client.accounts.credit.push(creditAccount);
  localStorage.setItem("bank", JSON.stringify(bank));
  creditForm.reset();
}

function onDebitAccountClick(event: any) {
  if (!event.target.hasAttribute("data-debit")) {
    return;
  }
  const id = event.target.getAttribute("data-debit");

  const accountsContainer = document.getElementById(`${id}`);
  const client = bank.find((client: IClient) => client.id === id);

  const debitMarkup = debitTemplate(client.accounts.debit);
  accountsContainer?.insertAdjacentHTML("beforeend", debitMarkup);
}

function onCreditAccountClick(event: any) {
  if (!event.target.hasAttribute("data-credit")) {
    return;
  }
  const id = event.target.getAttribute("data-credit");

  const accountsContainer = document.getElementById(`${id}`);
  const client = bank.find((client: IClient) => client.id === id);

  const creditMarkup = creditTemplate(client.accounts.credit);
  accountsContainer?.insertAdjacentHTML("beforeend", creditMarkup);
}

function onSaveClientDataClick(event: any) {
  if (!event.target.hasAttribute("data-save")) {
    return;
  }
  event.preventDefault();
  const id = event.target.getAttribute("data-save");
  let client = bank.find((client: IClient) => client.id === id);

  const formData = new FormData(event.target.closest("form"));
  client.name = formData.get("name");
  client.registrationDate = formData.get("date");
  client.isActive = formData.get("isActive");

  localStorage.setItem("bank", JSON.stringify(bank));
}

function onDeleteBtnClick(event: any) {
  if (!event.target.hasAttribute("data-remove")) {
    return;
  }
  const id = event.target.getAttribute("data-remove");
  const updatedBank = bank.filter((client: IClient) => client.id !== id);
  bank = updatedBank;
  localStorage.setItem("bank", JSON.stringify(updatedBank));
  renderBank(updatedBank);
}

function onSaveDebitAccountClick(event: any) {
  if (!event.target.hasAttribute("data-debitsave")) {
    return;
  }
  event.preventDefault();

  const id: string = event.target.getAttribute("id");
  const client: IClient = bank.find((client: IClient) => client.id === id);
  const accountId: string = event.target.getAttribute("data-debitsave");
  const account: IDebit | undefined = client.accounts.debit?.find(
    (account: IDebit) => account.accountId === accountId
  );

  const formData = new FormData(event.target.closest("form"));
  account.balance = formData.get("balance");
  account.activity = formData.get("activity");
  account.currency = formData.get("currency");
  account.activityDate = formData.get("activityDate");
  account.cardExpiryDate = formData.get("cardExpiryDate");
  account.accountId = formData.get("accountId");

  localStorage.setItem("bank", JSON.stringify(bank));
}

function onSaveCreditAccountClick(event: any) {
  if (!event.target.hasAttribute("data-creditsave")) {
    return;
  }
  event.preventDefault();
  const id = event.target.getAttribute("id");
  const client = bank.find((client: IClient) => client.id === id);
  const accountId = event.target.getAttribute("data-creditsave");
  const account = client.accounts.credit.find(
    (account: ICredit) => account.accountId === accountId
  );

  const formData = new FormData(event.target.closest("form"));

  account.balance = formData.get("balance");
  account.creditLimit = formData.get("creditLimit");
  account.activity = formData.get("activity");
  account.currency = formData.get("currency");
  account.activityDate = formData.get("activityDate");
  account.cardExpiryDate = formData.get("cardExpiryDate");
  account.accountId = formData.get("accountId");

  localStorage.setItem("bank", JSON.stringify(bank));
}

function onDeleteDebitAccountlick(event: any) {
  if (!event.target.hasAttribute("data-debitremove")) {
    return;
  }
  const id = event.target.getAttribute("id");
  const client = bank.find((client: IClient) => client.id === id);
  const accountId: string = event.target.getAttribute("data-debitremove");

  for (let i: number = 0; i < client.accounts.debit.length; i++) {
    if (client.accounts.debit[i].accountId === accountId) {
      client.accounts.debit.splice(i, 1);
    }
  }
  localStorage.setItem("bank", JSON.stringify(bank));
  renderBank(bank);
}

function onDeleteCreditAccountClick(event: any) {
  if (!event.target.hasAttribute("data-creditremove")) {
    return;
  }
  const id = event.target.getAttribute("id");
  const client = bank.find((client: IClient) => client.id === id);
  const accountId = event.target.getAttribute("data-creditremove");

  for (let i: number = 0; i < client.accounts.credit.length; i++) {
    if (client.accounts.credit[i].accountId === accountId) {
      client.accounts.credit.splice(i, 1);
    }
  }
  localStorage.setItem("bank", JSON.stringify(bank));
  renderBank(bank);
}
