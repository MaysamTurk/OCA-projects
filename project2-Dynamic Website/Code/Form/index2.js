function darkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


var Email = document.getElementById("email");
var Password = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


//  show the message box
getMessage = (ID) => {
  document.getElementById("message").style.display = "block";
}


GoOut = (ID) => {
  document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
Password.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (Password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (Password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (Password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (Password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


function myFunction() {
  var checkBox = document.getElementById("checkBox");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// User Name Validation

var userName = document.getElementById("name");





// When the user starts to type something inside the user Name field
userName.onkeyup = function () {

  var Name = /^[A-Za-z\s]+$/;
  if (Email.value.match(Name)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}


// Email Validation

var Email = document.getElementById("email");





// When the user starts to type something inside the email field
Email.onkeyup = function () {

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (Email.value.match(mailformat)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
}

// Phone Number Validation

var Phone = document.getElementById("phone");




// When the user starts to type something inside the phone field
Phone.onkeyup = function () {

  var phoneFormat = /^[0-9]{10}*$/;
  if (Phone.value.match(phoneFormat)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
}

// Agreement the check box // create account
function Checked(termsCheckBox) {
  if (termsCheckBox.checked) {
    document.getElementById("creat-account").disabled = false;
    document.getElementById("save-information").disabled = false;

  } else {
    document.getElementById("creat-account").disabled = true;
    document.getElementById("save-information").disabled = true;

  }
}


// call Clear All function
function clearLocal() {
  window.localStorage.clear();
  window.sessionStorage.clear();
  window.location.reload();

}




// Local storage (user name)
function LocalStorage() {
  var inputName = document.getElementById("name");
  localStorage.setItem("name", inputName.value);

  var inputEmail = document.getElementById("email");
  window.localStorage.setItem("email", inputEmail.value);

  var inputDate = document.getElementById("date");
  localStorage.setItem("date", inputDate.value);

  var inputPhone = document.getElementById("phone");
  localStorage.setItem("phone", inputPhone.value);

  var inputPassword = document.getElementById("psw");
  localStorage.setItem("psw", inputPassword.value);

}



//Session Storage (password)
function SessionStorage() {
  var inputName = document.getElementById("name");
  sessionStorage.setItem("name", inputName.value);

  var inputEmail = document.getElementById("email");
  window.sessionStorage.setItem("email", inputEmail.value);

  var inputDate = document.getElementById("date");
  sessionStorage.setItem("date", inputDate.value);

  var inputPhone = document.getElementById("phone");
  sessionStorage.setItem("phone", inputPhone.value);

  var inputPassword = document.getElementById("psw");
  sessionStorage.setItem("psw", inputPassword.value);

}