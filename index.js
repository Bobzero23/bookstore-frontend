const loginForm = document.getElementById('my-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make a request to the server to login the user
    axios.post('http://localhost:8081/login', {
        username,
        password,
    })
        .then((response) => {
            const user = response.data;
            if (user && user.authenticated) {
                const userId = user.user_id;
                const userPhone = user.phone;
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('userPhone', userPhone);
                localStorage.setItem('userId', userId); // Store the user ID in local storage
                localStorage.setItem('isLogin', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Invalid credentials');
            }
        })
        .catch((error) => {
            location.reload();
            alert('Invalid credentials');
            console.error('Login error:', error);
        });
});
