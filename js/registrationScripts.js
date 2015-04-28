var button = document.querySelector("button");
var username, name, password, passwordAgain, email, birthday;
var alertMessage;
var redColor = "#f2aeae";
button.addEventListener ("click", function(event){
	username =  document.getElementById("usernameField");
	displayName =  document.getElementById("nameField");
	password =  document.getElementById("passwordField");
	passwordAgain =  document.getElementById("passwordAgainField");
	email =  document.getElementById("emailField");
	birthday =  document.getElementById("birthdayField");
	alertMessage = "";

	emptyFieldsValidation(username, displayName, password, passwordAgain, email, birthday);
	
	passwordValidationResult = passwordValidation(password.value, passwordAgain.value);
	if (passwordValidationResult == 3){
		alertMessage += ">Your password must be more than 6 characters<br>";
		alertMessage += ">Your both passwords must be the same<br>";
		password.style.background = redColor;
		passwordAgain.style.background = redColor;
	}
	else if (passwordValidationResult == 2){
		alertMessage += ">Your password must be more than 6 characters<br>";
		password.style.background = redColor;
		passwordAgain.style.background = redColor;
	}
	else if (passwordValidationResult == 1){
		alertMessage += ">Your both passwords must be the same<br>";
		password.style.background = "#fff";
		passwordAgain.style.background = redColor;
	}
	else{
		password.style.background = "#fff";
		passwordAgain.style.background = "#fff";
	}

	if (emailValidation(email.value)){
		email.style.background = "#fff";
	}
	else{
		email.style.background = redColor;
		alertMessage += ">Your Email address is not valid<br>"
	}

	if (birthdayValidation(birthday.value)){
		birthday.style.background = "#fff";
	}
	else{
		alertMessage += ">Your birthday must be in DD/MM/YYYY format<br>"
		birthday.style.background = redColor;
	}

	var alert = document.getElementsByClassName("alert-danger")[0];

	if (alertMessage != ""){
		alert.innerHTML = alertMessage;
		alert.hidden = false;
	}
	else{
		alert.hidden = true;
	}

	//alert(alertMessage);
	event.preventDefault();
});

function birthdayValidation(birthday){
	var re = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	return re.test(birthday);
};

function emailValidation(email){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
};

function passwordValidation(firstPassword, secondPassword){
	if (firstPassword.length < 6){
		if (firstPassword != secondPassword)
			return 3;
		else
			return 2;
	}
	else{
		if (firstPassword != secondPassword)
			return 1;
		else
			return 0;
	}
};

function emptyFieldsValidation(username, DisplayName, password, passwordAgain, email, birthday){
	if (username.value == ""){
		alertMessage = ">All the fields are required<br>";
		username.style.background = redColor;
	}else{
		username.style.background = "#fff";
	}
	if (displayName.value == ""){
		alertMessage = ">All the fields are required<br>";
		displayName.style.background = redColor;
	}else{
		displayName.style.background = "#fff";
	}
	if (password.value == ""){
		alertMessage = ">All the fields are required<br>";
		password.style.background = redColor;
	}else{
		password.style.background = "#fff";
	}
	if (passwordAgain.value == ""){
		alertMessage = ">All the fields are required<br>";
		passwordAgain.style.background = redColor;
	}else{
		passwordAgain.style.background = "#fff";
	}
	if (email.value == ""){
		alertMessage = ">All the fields are required<br>";
		email.style.background = redColor;
	}else{
		email.style.background = "#fff";
	}
	if (birthday.value == ""){
		alertMessage = ">All the fields are required<br>";
		birthday.style.background = redColor;
	}else{
		birthday.style.background = "#fff";
	}
}