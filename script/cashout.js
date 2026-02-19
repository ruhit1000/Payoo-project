document.getElementById('cashout-btn').addEventListener('click', () => {
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length < 11) {
        alert('Please put 11 digit agent number');
        return;
    };
    const cashoutAmount = getValueFromInput('cashout-amount');
    if (Number(cashoutAmount) <= 0) {
        alert('Invalid Amount');
        return;
    };
    const pin = getValueFromInput('cashout-pin');
    if (pin !== '1234') {
        alert('Invalid Pin');
        return;
    };
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    };
    alert('Cashout Successful');
    setBalance(newBalance);
    resetCashoutInputs();
    addToHistory(`Cashout to ${cashoutNumber}`, "./assets/opt-2.png")
});