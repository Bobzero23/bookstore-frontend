const deleteBtnEl = document.getElementById("delete-btn")
const username = localStorage.getItem("username")
const userPhone = localStorage.getItem("userPhone")
const userId = localStorage.getItem("userId")
const spanNameEl = document.getElementById("span-name")
const spanPhoneEl = document.getElementById("span-phone");

spanNameEl.textContent = username;
spanPhoneEl.textContent = userPhone;
deleteBtnEl.addEventListener("click", () => {
    const result = axios.delete(`http://localhost:8081/deleteById/${userId}`)
        .then((response) => {
            window.location.href = "index.html";
            localStorage.clear();
        })
});


const editConatainerEl = document.getElementById("edit-container")
const editBtnEl = document.getElementById("edit-btn");
const userInfoEl = document.getElementById("user-info");
const userBtnContainerEl = document.getElementById("user-btn-container");
const userEl = document.getElementById("user")
editBtnEl.addEventListener("click", () => {
    userInfoEl.style.display = "none";
    userBtnContainerEl.style.display = "none";
    userEl.style.display = 'none';
    editConatainerEl.style.display = 'block';
})


const formEl = document.getElementById("edit-container");
formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("it is working")

    const formData = new FormData(this);


    axios.put(`http://localhost:8081/editUser/${userId}`, Object.fromEntries(formData))
        .then((response) => {

            const user = response.data;

            console.log(response.data);

            window.location.href = "profile.html";
            alert("user updated successfully!!");


            const userId = user.user_id;
            const userPhone = user.phone;
            const username = user.username;
            const password = user.password;

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('userPhone', userPhone);
            localStorage.setItem('userId', userId);
        })

});




