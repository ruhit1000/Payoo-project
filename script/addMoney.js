document.getElementById('add-money-btn').addEventListener('click', ()=>{
    const bankAccount = getValueFromInput('add-money-bank');
    if (bankAccount == 'Select a Bank') {
        alert('Please select a bank');
        return;
    }
    const accountNumber = getValueFromInput('add-money-number');
    if (accountNumber.length < 11) {
        alert('Invalid account number');
        return;
    }
    const pin = getValueFromInput('add-money-pin');
    if (pin !== '1234') {
        alert('Invalid Pin');
        return;
    }
    const amount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);
    alert('Add Money Success');
    setBalance(newBalance);
    resetAddMoneyInputs();
});