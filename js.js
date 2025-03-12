const confirmPassword = document.getElementById('conf-password');
const password = document.getElementById('password');

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.outline = "1.5px solid red";
        password.style.outline = "1.5px solid red";
    } 
    else {
        confirmPassword.style.outline = "1.5px solid #596D48";
        password.style.outline = "1.5px solid #596D48";
    }
}
)
password.addEventListener('input', () => {
    if (confirmPassword.value !== "") {
    if (confirmPassword.value !== password.value) {
        password.style.outline = "1.5px solid red";
        confirmPassword.style.outline = "1.5px solid red";
    } 
    else {
        password.style.outline = "3px solid #596D48";
        confirmPassword.style.outline = "1.5px solid #596D48";
    }
}
}
)