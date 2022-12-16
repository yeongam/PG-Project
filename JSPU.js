const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

function color() {
    if ((loginId.value.length > 2) &&
        loginPw.value.length >= 4) {
        loginBtn.style.backgroundColor = "#02b12e";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#a8a8a8";
        loginBtn.disabled = true;
    }
}

function moveToMain() {
    location.replace("JSP.html");
}
loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click', moveToMain);

if ((loginId.value == '전영암' && loginPw.value == '1234'),
    (loginId.value == '고병현' && loginPw.value == '4567'),
    (loginId.value == '이한비' && loginPw.value == '7890'),
    (loginId.value == '최지성' && loginPw.value == '0402')) {
    location.moveToMain();
}