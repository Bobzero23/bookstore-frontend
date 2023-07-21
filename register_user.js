const form = document.querySelector("#myForm");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    axios.post("http://localhost:8081/addNewUser", Object.fromEntries(formData))
        .then(response => {
            console.log(response.data);
            location.reload();
            window.location.href = "index.html";

        })
        .catch(error => {
            console.log(error.data);
        })
});