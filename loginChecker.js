const isLogin = localStorage.getItem("isLogin")

window.addEventListener("popstate", function () {
    if (!isLogin) {
        window.location.replace("index.html");
    }
});


