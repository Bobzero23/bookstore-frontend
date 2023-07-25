const formEl = document.getElementById("my-form");

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    axios.post("http://localhost:8081/addReview", Object.fromEntries(formData))
        .then((response) => {
            console.log(response.data);
            location.reload();
            alert("thanks for your review")
        })
        .catch(function (error) {
            console.error();
        })
});