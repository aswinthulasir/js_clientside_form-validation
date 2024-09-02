// validation is a method to authenticate user- client side

// Form Validation

var emailinput=document.getElementById('email_in');
var passwordinput=document.getElementById('password_in');
var error1=document.getElementById('err_e');
var error2=document.getElementById('err_p');



// function auth(){
//     if (emailinput.value==''||passwordinput.value=='') {
//         alert('Fields cannot be empty');
        
//     } 
//     if (passwordinput.value.length<=6) {
//         alert('Password length must be above 6')
//     }else {
//         alert('Form validated successfully');
//     }
// }


//RegEx form validation

let regex_e=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2})?$/

// let regex_e = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2})?$/

function auth(){
    if (regex_e.test(emailinput.value)) {

        error1.innerText='Email is valid';
        error1.style.color='green';
        return true;
    } else {
        error1.innerText='Email is invalid';
        error1.style.color='red';
        return false;   
    }
}

let regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
function auth_password(){
    if (regex_password.test(passwordinput.value)) {
        error2.innerText='Password is valid';
        error2.style.color='green';
        return true;
}

else{
    error2.innerText='Password is invalid';
        error2.style.color='red';
        return false; 
}
}

function validateForm() {
    const isEmailValid = auth();
    const isPasswordValid = auth_password();
    

    return isEmailValid && isPasswordValid;
}





//exception handling
var er12=document.getElementById('error')

function show(){
    try{
        allert('Hello world');
    }catch (error){
        er12.innerText=error;
    }
    
}