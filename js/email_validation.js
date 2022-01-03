// Contact Section
/* 
 * Error Message
    (id) email -> input field
    (class) contact-btn -> submit button
    (class) email-field-container -> element that holds input and submit
    (class) email-error -> text to display when error occurs
    (tag) email-field-container svg -> error message icon   
*/
const contactEmail = document.getElementById('email');
const contactSubmit = document.getElementsByClassName('contact-btn')[0];
const emailFieldContainer = document.getElementsByClassName('email-field-container')[0];
const emailFieldErrorSvg = emailFieldContainer.getElementsByTagName('svg')[0];
const contactError = document.getElementsByClassName('email-error')[0];
// Add event listener
contactSubmit.addEventListener('click', validateEmail);
let email = document.contactForm.userEmail;

function validateEmail() {
    // Validate email
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = email.value;
    if (email.match(regex)) {
        contactError.style.display = 'none';
        emailFieldErrorSvg.style.display = 'none';
        return true;
    } else {
        contactError.style.display = 'block';
        emailFieldErrorSvg.style.display = 'block';
        return false;
    }
}