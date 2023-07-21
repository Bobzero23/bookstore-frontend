function LoginObserver(event) {
    const isLogin = localStorage.getItem("isLogin");
    const path = window.location.pathname;

    if (isLogin !== "true" && (path !== "/Bookstore/" && path !== "/Bookstore/index.html")) {
        window.location.replace("/Bookstore/index.html");
    }
}

const logoutButton = document.getElementById("logoutLink");

function logout() {
    //localStorage.clear();
    localStorage.setItem("isLogin", "false");
    localStorage.removeItem("cartItems");
    window.location.replace("/Bookstore/");
}

logoutButton.addEventListener('click', logout);

document.addEventListener("DOMContentLoaded", LoginObserver);

