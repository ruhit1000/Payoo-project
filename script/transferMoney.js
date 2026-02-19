document.getElementById('transfer-money-btn').addEventListener('click', () => {
    const userAccountNumber = getValueFromInput('transfer-money-number');
    if (userAccountNumber.length < 11) {
        alert('Invalid Number');
        return;
    }
    const transferAmount = getValueFromInput('transfer-money-amount');
    const pin = getValueFromInput('transfer-money-pin');
    if (pin !== '1234') {
        alert('Invalid Pin');
        return;
    }
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    alert('Transfer money successful');
    setBalance(newBalance);
    resetTransferMoneyInputs();
    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
            <div class="transaction-card py-3 px-4 bg-base-100 rounded-xl flex gap-2 items-center">
                <div class="bg-base-200 p-3 rounded-full">
                    <img src="./assets/opt-3.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-neutral/70">Transfer Money to ${userAccountNumber}</h3>
                    <p class="text-xs text-neutral/70">${time}</p>
                </div>
            </div>
        `;
    history.append(newHistory);
})