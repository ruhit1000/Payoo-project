document.getElementById('get-bonus-btn').addEventListener('click', () => {
    const couponCode = getValueFromInput('bonus-coupon');
    if (couponCode !== 'ADD500') {
        alert('Invalid Coupon Code');
        return;
    }
    const currentBalance = getBalance();
    const newBalance = currentBalance + 500;
    alert('Coupon Added Successfully')
    setBalance(newBalance);
    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
            <div class="transaction-card py-3 px-4 bg-base-100 rounded-xl flex gap-2 items-center">
                <div class="bg-base-200 p-3 rounded-full">
                    <img src="./assets/opt-4.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-neutral/70">Bonus Added</h3>
                    <p class="text-xs text-neutral/70">${time}</p>
                </div>
            </div>
        `;
    history.append(newHistory);
});