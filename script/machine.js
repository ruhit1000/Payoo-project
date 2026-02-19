// return value from id
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// Get current balance
function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
};

// Set current Balance
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// Reset add money input
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

// Reset cashout inputs
function resetCashoutInputs() {
    [
        'cashout-number',
        'cashout-amount',
        'cashout-pin'
    ].forEach(id => {
        document.getElementById(id).value = '';
    });
};

// Menu button functionality
function showOnly(id) {
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transaction = document.getElementById('history');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transaction.classList.add('hidden');
    
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
};

// Get time
const now = new Date();
const time = now.toLocaleString('en-GB', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});
