var button = document.querySelector("button");
button.addEventListener ("click", function(event){
	var email =  document.getElementById("emailField");
	var isValid = emailValidation(email.value);
	if (isValid){
		var alert = document.getElementsByClassName("alert-success")[0];
		alert.hidden = false;
		alert = document.getElementsByClassName("alert-danger")[0];
		alert.hidden = true;
	}
	else{
		var alert = document.getElementsByClassName("alert-danger")[0];
		alert.hidden = false;
		alert = document.getElementsByClassName("alert-success")[0];
		alert.hidden = true;
	}
	event.preventDefault();
});

function emailValidation(email){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};
