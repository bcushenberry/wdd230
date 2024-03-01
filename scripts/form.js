const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const passwordError = document.querySelector("#password-error");

password2.addEventListener("focusout", checkSame);
password2.addEventListener("focus", clearErrorText);

function clearErrorText() {
    passwordError.textContent = "";
}

function setPasswordError() {
    passwordError.style.color = "red";
    passwordError.textContent = "Password does not match!";
    passwordError.style.visibility = "show";
    password.style.backgroundColor = "#fff0f3";
}

function clearPasswordError() {
    passwordError.style.display = "none";
    password.style.backgroundColor = "#fff";
    password.style.color = "#000";
}

function checkSame() {
	if (password.value !== password2.value) {
        setPasswordError();
        password.value = "";
        password2.value = "";
        password.focus();
    }
    else {
        clearPasswordError();
	}
}

const ratingvalue = document.getElementById("ratingvalue");
const range = document.getElementById("rating");

range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingvalue.innerHTML = range.value;
}