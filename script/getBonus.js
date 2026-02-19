document.getElementById('get-bonus-btn').addEventListener('click', () => {
    const couponCode = getValueFromInput('bonus-coupon');
    if (couponCode !== 'ADD500') {
        alert('Invalid Coupon Code');
        return;
    };
    const currentBalance = getBalance();
    const newBalance = currentBalance + 500;
    alert('Coupon Added Successfully')
    setBalance(newBalance);
    addToHistory("Bonus Added", "./assets/opt-4.png")
});