window.onload = loginLoad;

function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    var usernameLogin = document.getElementById("usernameLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const username = urlParams.get('username');
    const password = urlParams.get('password');

    if (passwordLogin != password || usernameLogin != username) {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }
    alert("Login สำเร็จ");
}