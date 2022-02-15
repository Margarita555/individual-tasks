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
}

// function fetchCurrencyRate() {
   
//         const fetchedCurrencyRate = await fetch(`https://restcountries.com/v2/name/${searchQuery}`)
//         .then(response => {
//         return response.json();
//         }).then(countries => {
//         return countries
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