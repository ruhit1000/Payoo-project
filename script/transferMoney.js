document.getElementById('transfer-money-btn').addEventListener('click', () => {
    const userAccountNumber = getValueFromInput('transfer-money-number');
    if (userAccountNumber.length < 11) {
        alert('Invalid Number');
        return;
    };
    const transferAmount = getValueFromInput('transfer-money-amount');
    if (Number(transferAmount) <= 0) {
        alert('Invalid Amount');
        return;
    };
    const pin = getValueFromInput('transfer-money-pin');
    if (pin !== '1234') {
        alert('Invalid Pin');
        return;
    };
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    };
    alert('Transfer money successful');
    setBalance(newBalance);
    resetTransferMoneyInputs();
    addToHistory(`Transfer Money to ${userAccountNumber}`, "./assets/opt-3.png");
})