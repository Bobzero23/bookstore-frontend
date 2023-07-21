const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission


    const formData = new FormData(this);

    axios.post('http://localhost:8081/addBook', Object.fromEntries(formData))
        .then(response => {
            console.log(response.data);
            location.reload();
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        });
});
