document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if(localStorage.getItem(username) !== null){
        alert("이미 존재하는 계정입니다");
    } else {
        localStorage.setItem(username, password);
        alert('User registered!');
    }
});
