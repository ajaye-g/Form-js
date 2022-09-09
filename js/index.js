const form = document.getelementId('form');
const username = document.getelementId('username');
const email = document.getelementId('email');
const password = document.getelementId('password');
const password2 = document.getelementId('password2');

form.addEventListener('submit', e=> {
	e.preventDefault();

	validateInputs();
});
const setError = (element,message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDispay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}
const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
	const usernamevalue = username.value.trim();
	const emailvalue = email.value.trim();
	const passwordvalue = password.value.trim();
	const password2value = password2.value.trim();


	if(usernamevalue==''){
		setError(username, 'username is required');
	}else{
	   setSuccess(username);
	}
	
	if(emailValue == ''){
		setError(email, 'Email is required');
	}else if (!isValidEmail(emailValue)) {
		setError(email, 'Provide a valid email address')
	}else{
		setSuccess(email);
	}
	
	if(passwordValue == ''){
		setError(password, 'password is required');
	}else if (passwordValue.length<8){
		setError(password,'password must be at least 8 character');
	}else{
		setSuccess(password);
	}

	if(password2value == '') {
		setError(password2, 'please confirm your password');
	}else if (password2Value !== passwordValue) {
		setError(password2, 'password doesn't match');
	}else {
		setSuccess(password2);
	}

};
	