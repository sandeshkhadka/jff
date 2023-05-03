let passwordField = document.getElementsByName("password");
let passwordConfirmField = document.getElementsByName("passwordConfirm");
let passwordMessage = document.getElementsByClassName("passwordMessage");

function validatePassword(){
  let password = passwordField[0].value;
  let confirmPassword = passwordConfirmField[0].value;
  if(password === confirmPassword){
    passwordMessage[0].textContent = "";
  }else{
    passwordMessage[0].textContent = "*Passwords do not match";
  }
}
