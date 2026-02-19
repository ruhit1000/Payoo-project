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
    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
            <div class="transaction-card py-3 px-4 bg-base-100 rounded-xl flex gap-2 items-center">
                <div class="bg-base-200 p-3 rounded-full">
                    <img src="./assets/opt-2.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-neutral/70">Cashout to ${cashoutNumber}</h3>
                    <p class="text-xs text-neutral/70">${time}</p>
                </div>
            </div>
        `;
    history.append(newHistory);
});