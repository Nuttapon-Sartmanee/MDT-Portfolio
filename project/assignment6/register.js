window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var passwordArray = document.getElementsByClassName("password");
    var error = document.getElementById("errormsg");

    if (passwordArray[0].value != passwordArray[1].value) {
        error.innerHTML = "กรุณาใส่ Password ให้ตรงกัน";
        return false
    }
}