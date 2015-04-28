var button = document.querySelector("button");
button.addEventListener ("click", function(event){
	isFormValid();
	event.preventDefault();
});

function isFormValid(){
	var username = document.getElementById("usernameField");
	if (username.value == "HoShay"){
		//username.style.background = '#da1b52';
		var alert = document.getElementsByClassName("alert-danger")[0];
		alert.hidden = false;
	}
};
