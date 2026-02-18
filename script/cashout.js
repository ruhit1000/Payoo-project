document.getElementById('cashout-btn').addEventListener('click', ()=>{
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length < 11) {
        alert('Please put 11 digit agent number');
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');
    const pin = getValueFromInput('cashout-pin');
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    if (pin === '1234') {
        const newBalance = Number(balance) - Number(cashoutAmount);
        if (newBalance < 0) {
            alert(`Cashout amount must be less than or equal to ${balance}`);
            return;
        } else {
            alert('Cashout Successful');
            balanceElement.innerText = newBalance;
        }
    } else {
        alert('Invalid Pin');
        return;
    }
});