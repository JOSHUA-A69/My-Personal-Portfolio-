let menu = document.querySelector('#menu-icon-js');
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navtc = document.querySelector('#nav-tc-js');

menu.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	navtc.classList.toggle("nav-touch-close-open");
}

navtc.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.remove('open');
	navtc.classList.remove('nav-touch-close-open');
	navtc.classList.remove("nav-tc-z");
	navtc.classList.remove("nav-LR-TC");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;

	document.getElementById("header").classList.add('scrolled');
	if (currentScrollPos === 0) {
		// console.log("Hello");
		document.getElementById("header").classList.remove('scrolled');
	}
	if (navtc.classList.contains('nav-touch-close-open')) {
		return;
	}
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}


import { serviceID } from './service_config.js';
import { templateID } from './template_config.js';
import { EMAILJS_USER_ID } from '../pages/config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_USER_ID); 

    // Attach the sendMail function to form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

const contactSection = document.querySelector('.contact-section');
const formSection = document.querySelector('.form-section');
const contactSubmitAfter = document.querySelector('.contact-submit-after');
const csaOK = document.querySelector('.csa-ok');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorDiv = document.querySelector('.error');
const emailErrorDiv = document.querySelector('.email-error');
const contactButton = document.querySelector('.contact-button');
const contactLoad = document.querySelector('.contact-load');
const submitText = document.querySelector('.submit-text');

if (csaOK) {
    csaOK.onclick = () => {
        contactSubmitAfter.classList.remove('show');
        formSection.classList.remove('hide');
        contactSection.classList.remove('csa-cs');
        contactForm.classList.remove('csa-cf');
        contactButton.classList.remove('loading');
        contactLoad.classList.remove('show');
        submitText.classList.remove('hide');
    };
}

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
    let isValid = true;
    let emailIsValid = true;
    let nameIsValid = true;
    let messageIsValid = true;

    // Check if Name field is empty
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameIsValid = false;
    }

    // Check if Email field is empty or not a valid email address
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        isValid = false;
        if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
            emailIsValid = false;
        }
    }

    // Check if Message field is empty
    if (messageInput.value.trim() === '') {
        isValid = false;
        messageIsValid = false;
    }

    if (!isValid) {
        // Display the error message
        errorDiv.classList.add('error-show');
        emailErrorDiv.classList.remove('error-show');
        if (nameIsValid && messageIsValid && !emailIsValid) {
            errorDiv.classList.remove('error-show');
            emailErrorDiv.classList.add('error-show');
        }
    } else {
        // Form is valid, it can be submitted now
        emailErrorDiv.classList.remove('error-show');
        errorDiv.classList.remove('error-show');
        contactButton.classList.add('loading');
        contactLoad.classList.add('show');
        submitText.classList.add('hide');
        setTimeout(function () {
            sendMail();
        }, 2000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendMail() {
    var params = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";

                contactSubmitAfter.classList.add('show');
                formSection.classList.add('hide');
                contactSection.classList.add('csa-cs');
                contactForm.classList.add('csa-cf');
            }
        )
        .catch((error) => {
            console.log(error);
        });
}
