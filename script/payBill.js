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
    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
            <div class="transaction-card py-3 px-4 bg-base-100 rounded-xl flex gap-2 items-center">
                <div class="bg-base-200 p-3 rounded-full">
                    <img src="./assets/opt-1.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-neutral/70">Pay Bill to ${payBillSelect}</h3>
                    <p class="text-xs text-neutral/70">${time}</p>
                </div>
            </div>
    `;
    history.append(newHistory);
});