// Assuming you have a login form with id "loginForm"
const loginForm = document.getElementById('my-form'); 1
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
            window.location.href = 'home.html';
            localStorage.setItem("isLogin", "true");
        })
        .catch((error) => {
            location.reload();
            alert("Invalid credentials");
            console.error('Login error:', error);
        });
});


