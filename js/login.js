const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// Password Validation Code

const pass = document.querySelector('.signUppassword-input');
const confirmPass = document.querySelector('.confirm_password-input');
const error = document.querySelector('.error-message');
const timeout = null;

// Form
const form = document.querySelectorAll('.form');

const showError = message => {
	error.style.color = '#C91E1E';
	error.style.display = 'block';
	error.innerHTML = message;
};

const showPass = message => {
	error.style.color = '#119822';
	error.innerHTML = message;
};

const validatePassword = password => {
	const lowerCaseRegex = new RegExp('^(?=.*[a-z])');
	const upperCaseRegex = new RegExp('^(?=.*[A-Z])');
	const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])');
	const numericRegex = new RegExp('^(?=.*[0-9])');

	if (password.length < 6) {
		showError('Your password must be least 6 characters long.');
	} else if (!lowerCaseRegex.test(password)) {
		showError('Your password must include at least one lowercase character.');
	} else if (!upperCaseRegex.test(password)) {
		showError('Your password must include at least one uppercase character.');
	} else if (!specialCharacterRegex.test(password)) {
		showError('Your password must include at least one special character.');
	} else if (!numericRegex.test(password)) {
		showError('Your password must include at least one number.');
	} else {
		showPass('Strong password!');
	}
};

pass.addEventListener('keyup', e => {
	const password = e.target.value;
	// Wait until typing stopped and then validate the password
	clearTimeout(timeout);
	timeout = setTimeout(() => validatePassword(password), 400);
});
