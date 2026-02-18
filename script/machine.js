function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
};

function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

function resetAddMoneyInputs() {
    [
        'add-money-bank',
        'add-money-number',
        'add-money-amount',
        'add-money-pin'
    ].forEach(id => {
        document.getElementById(id).value = '';
    });
}

function resetCashoutInputs() {
    [
        'cashout-number',
        'cashout-amount',
        'cashout-pin'
    ].forEach(id => {
        document.getElementById(id).value = '';
    });
}
