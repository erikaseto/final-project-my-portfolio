const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const question = document.getElementById("question");

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation for all fields
    const isInputValid1 = validateInputs1();
    const isInputValid2 = validateInputs2();
    const isInputValid3 = validateInputs3();
    const isQuestionValid = validateQuestion();

    // check if validations passed
    if (isInputValid1 && isInputValid2 && isInputValid3 && isQuestionValid) {
        const firstNamefinal = firstName.value;
        const lastNamefinal = lastName.value;
        const emailfinal = email.value;

        // hide form after valid submission
        form.style.display = 'none';

        // display summary message
        document.getElementById("results").innerHTML = `
            Thank you, ${firstNamefinal} ${lastNamefinal}! 
            I'll send a response to your email ${emailfinal} as soon as I can.`;
    }
});

// error message and style
const setErrorMessage = (value, message) => {
    const inputControl = value.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); 

    errorDisplay.innerText = message; // error message
    inputControl.classList.add('error'); // add error
    inputControl.classList.remove('success'); // remove success (if previously added)
}

// success message and style
const setSuccessMessage = (value) => {
    const inputControl = value.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); 

    errorDisplay.innerText = ''; // clear previous error message
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// validate first name
const validateInputs1 = () => {
    const firstNameValue = firstName.value.trim();
    if (firstNameValue.length < 2 || !isAlpha(firstNameValue)) {
        setErrorMessage(firstName, 'Must be at least 2 alphabetic characters (A-Z).');
        return false;
    } else {
        setSuccessMessage(firstName);
        return true;
    }
}

// validate last name
const validateInputs2 = () => {
    const lastNameValue = lastName.value.trim();
    if (lastNameValue.length < 2 || !isAlpha(lastNameValue)) {
        setErrorMessage(lastName, 'Must be at least 2 alphabetic characters (A-Z).');
        return false;
    } else {
        setSuccessMessage(lastName);
        return true;
    }
}

// validate email
const validateInputs3 = () => {
    const emailValue = email.value.trim();
    if (!emailValue || !isValidEmail(emailValue)) {
        setErrorMessage(email, 'Please provide a valid email address.');
        return false;
    } else {
        setSuccessMessage(email);
        return true;
    }
}

// validate question (not empty)
const validateQuestion = () => {
    const questionValue = question.value.trim();
    if (!questionValue) {
        setErrorMessage(question, 'Question is required.');
        return false;
    } else {
        setSuccessMessage(question);
        return true;
    }
}

// validate alphabetic characters
function isAlpha(element) {
    return /^[a-z]+$/i.test(element);
}

// validate email using regex
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
