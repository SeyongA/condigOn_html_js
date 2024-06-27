document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Login failed: Incorrect username or password.');
    }
});
