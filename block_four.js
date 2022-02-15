const client = {
    name: 'Voyskaya Vlada Vladimirovna',
    active: false,
    registrationDate: "",
    bills: {
        debtBill: {
             currentBalance: 0,
             activity: false,
             activityDate: "",
             currency: "USD",
        },
        creditBill: {
            personalFunds: 0,
            creditFunds: 0,
            creditLimit: 0,
            activity: false,
            activityDate: "",
            expiryDate: "",
            currency: "USD",
       },
    }
}