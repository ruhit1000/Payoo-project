document.getElementById('cashout-btn').addEventListener('click', ()=>{
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length < 11) {
        alert('Please put 11 digit agent number');
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');
    const pin = getValueFromInput('cashout-pin');
    const currentBalance = getBalance();

    if (pin === '1234') {
        const newBalance = currentBalance - Number(cashoutAmount);
        if (newBalance < 0) {
            alert('Invalid Amount');
            return;
        } else {
            alert('Cashout Successful');
            setBalance(newBalance);
            resetCashoutInputs();
        }
    } else {
        alert('Invalid Pin');
        return;
    }
});