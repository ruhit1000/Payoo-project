document.getElementById('login-btn').addEventListener('click', () => {
    const contactNumber = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;
    if (contactNumber == '01234567890' && pin == '1234') {
        alert('login success');
        window.location.assign('./home.html');
    } else {
        alert('Invalid credentials');
        return;
    }
});