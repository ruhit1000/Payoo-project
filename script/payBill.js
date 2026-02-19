document.getElementById('pay-bill-btn').addEventListener('click', () => {
    const payBillSelect = getValueFromInput('pay-bill-select');
    if (payBillSelect == 'Select a Bank') {
        alert('Please select a bank');
        return;
    };
    const billerAccountNumber = getValueFromInput('biller-account-number');
    if (billerAccountNumber.length < 11) {
        alert('Invalid Biller Account Number');
        return;
    };
    const payAmount = getValueFromInput('pay-bill-amount');
    if (Number(payAmount) <= 0) {
        alert('Invalid Amount');
        return;
    };
    const pin = getValueFromInput('pay-bill-pin');
    if (pin !== '1234') {
        alert('Invalid Pin');
        return;
    };
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(payAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    };
    alert('Pay bill success');
    setBalance(newBalance);
    resetPayBillInputs();
    addToHistory(`Pay Bill to ${payBillSelect}`, "./assets/opt-1.png");
});