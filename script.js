var user_name=document.getElementById('username');
var phone_number=document.getElementById('phone');
var password_in=document.getElementById('password');
var err1=document.getElementById('error_u');
var err2=document.getElementById('error_ph');
var err3=document.getElementById('error_p');

let regex_n=/^([A-Za-z]+)$/

user_name.addEventListener('input', function() {
    auth_user();
});

function auth_user() {
    if (regex_n.test(user_name.value)) {
        err1.innerText = 'Valid Format';
        err1.style.color = 'green';
        return true;
    } else {
        err1.innerText = 'Invalid Format, Enter alphabets alone';
        err1.style.color = 'red';
        return false;
    }
}

let regex_ph=/^([0-9]+){10}$/

phone_number.addEventListener('input', function() {
    auth_phn();
});

function auth_phn(){
    if (regex_ph.test(phone_number.value)) {
        err2.innerText = 'Valid Format';
        err2.style.color='green';
        return true;
    }
    else{
        err2.innerText='Invalid Format:Enter 10 digit numbers alone';
        err2.style.color='red';
        return false;
    }
}

let regex_pass= /^([A-Za-z0-9]+)$/

password_in.addEventListener('input', function() {
    auth_pswd();
});

function auth_pswd(){
    if (regex_pass.test(password_in.value)) {
        err3.innerText = 'Valid Format';
        err3.style.color='green';
        return true;
    }
    else{
        err3.innerText='Invalid Format:Enter numbers and alphabets alone';
        err3.style.color='red';
        return false;
    }
}


const userNameValid= auth_user()
const phoneValid= auth_phn()
const passValid= auth_pswd()

function auth(){
    if (auth_user&&auth_phn&&auth_pswd==true) {
        alert('Authenticated Successfully');
        
    } else {
        alert('Authentication Failed');
    }
}