// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    msg.style.display = "inline";
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "Your email has been added!", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.getElementById('email-form');
let message = document.getElementById('message');
let input = document.getElementById('email-input');
const EMAIL_REQUIRED = "Whoops! It looks like you forgot to add your email!";
const EMAIL_INVALID = "Please provide a valid email address.";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let emailValid = validateEmail(form.elements["email-input"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (emailValid) {
		message.classList.add("success")
		input.classList.add("success")
		message.classList.remove("failure")
		input.classList.remove("failure-input")
	} else {
		message.classList.add("failure")
		input.classList.add("failure-input")
		message.classList.remove("success")
		input.classList.remove("success")
    }
});

