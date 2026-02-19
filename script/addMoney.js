document.getElementById('add-money-btn').addEventListener('click', () => {
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
    alert(`Add Money Success form ${bankAccount}`);
    setBalance(newBalance);
    resetAddMoneyInputs();

    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
            <div class="transaction-card py-3 px-4 bg-base-100 rounded-xl flex gap-2 items-center">
                <div class="bg-base-200 p-3 rounded-full">
                    <img src="./assets/opt-1.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-neutral/70">Add Money form ${bankAccount}</h3>
                    <p class="text-xs text-neutral/70">${time}</p>
                </div>
            </div>
    `;
    history.append(newHistory);
});