var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
	length: "",
	lowercase: "",
	uppercase: "",
	number: "",
	specialCharacter: ""
}

var characterTypes = function() {
	passwordCriteria.lowercase = window.prompt("Include lowercase characters? Answer yes or no.");
	passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
	if (passwordCriteria.lowercase === "yes") {
		passwordCriteria.lowercase = true;
	}
	else if (passwordCriteria.lowercase === "no") {
		passwordCriteria.lowercase = false;
	}
	
	passwordCriteria.uppercase = window.prompt("Include uppercase characters? Answer yes or no.");
	passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
	if (passwordCriteria.uppercase === "yes") {
		passwordCriteria.uppercase = true;
	}
	else if (passwordCriteria.uppercase === "no") {
		passwordCriteria.uppercase = false;
	}

	passwordCriteria.number = window.prompt("Include numeric characters? Answer yes or no.");
	passwordCriteria.number = passwordCriteria.number.toLowerCase();
	if (passwordCriteria.number === "yes") {
		passwordCriteria.number = true;
	}
	else if (passwordCriteria.number === "no") {
		passwordCriteria.number = false;
	}

	passwordCriteria.specialCharacter = window.prompt("Include special characters? Answer yes or no.");
	passwordCriteria.specialCharacter = passwordCriteria.specialCharacter.toLowerCase();
	if (passwordCriteria.specialCharacter === "yes") {
		passwordCriteria.specialCharacter = true;
	}
	else if (passwordCriteria.specialCharacter === "no") {
		passwordCriteria.specialCharacter = false;
	}
	if (passwordCriteria.lowercase === false && 
		passwordCriteria.uppercase === false && 
		passwordCriteria.number === false && 
		passwordCriteria.specialCharacter === false) {
		window.alert("Choose at least one character type.");
		characterTypes();
	}
}

var generatePassword = function() {

	passwordCriteria.length = window.prompt("Choose the length of the password between 8-128 characters.");

	passwordCriteria.length = parseInt(passwordCriteria.length);

	if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
		window.alert("Invalid length. Please choose a number between 8 and 128.");
		generatePassword();
	}


	characterTypes();

	window.alert("Generating secure password.");

	function makePassword() {
		var characters = "";
		if (passwordCriteria.lowercase === true) {
			characters = "abcdefghijklmnopqrstuvwxyz";
		}
		if (passwordCriteria.uppercase === true) {
			characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}
		if (passwordCriteria.number === true) {
			characters = characters + "0123456789";
		}
		if (passwordCriteria.specialCharacter === true) {
			characters = characters + "!@#$%^&*()";
		}
		var password = "";
		var length = passwordCriteria.length;
		for (var i = 0, n = characters.length; i < length; i++) {
			password += characters.charAt(Math.floor(Math.random() * n));
		}
		window.alert("Your secure password is: " + password);
		return password;
	}
	
	makePassword();
}

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);