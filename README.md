<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .hidden {
            display: none;
        }
        .button {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>My Personal Portfolio</h1>
    <button class="button" id="toggleButton">Show More Info</button>
    <div id="moreInfo" class="hidden">
        <p>This portfolio is a continuous work in progress and will keep evolving as I improve my skills. Feel free to explore and provide feedback! For more details and updates, visit this portfolio repository.</p>

        <h2>⭐️ Star the Repo</h2>
        <p>If you find this project helpful or interesting, please consider starring the repository! Your support is greatly appreciated and motivates me to continue improving and adding new features.</p>

        <h2>Clone the Portfolio Repository</h2>
        <p>Open your terminal or command prompt</p>
        <p>Run the following command to clone the repository:</p>
        <code>git clone https://github.com/JOSHUA-A69/My-Personal-Portfolio-</code>

        <h2>Setting Up EmailJS for Contact Form</h2>
        <p><strong>Step 1:</strong> Sign Up for EmailJS</p>
        <p>Go to the EmailJS website.</p>
        <p>Sign up for a free account if you don't already have one.</p>

        <p><strong>Step 2:</strong> Create an EmailJS Service</p>
        <p>Once logged in, navigate to the "Email Services" section.</p>
        <p>Click "Add new service" and follow the prompts to configure your email service. You will link it to your email provider (such as Gmail, Outlook, etc.).</p>

        <p><strong>Step 3:</strong> Create an EmailJS Template</p>
        <p>Go to the "Email Templates" section.</p>

        <p><strong>Step 4:</strong> Obtain Your EmailJS API Key</p>
        <p>Go to the "Account" section (usually under your profile or settings).</p>
        <p>You will find your User ID here, which acts as your API key.</p>

        <p><strong>Step 5:</strong> Obtain Your Service ID and Template ID</p>
        <p>Go to the "Email Services" section and select the service you created. Your Service ID will be listed there.</p>
        <p>Go to the "Email Templates" section and select the template you created. Your Template ID will be listed there.</p>

        <h2>Integrating EmailJS with the Contact Form</h2>
        <p><strong>Create configuration files:</strong></p>
        <p>You need to create three configuration files to store your EmailJS keys.</p>

        <code>service_config.js:</code>
        <pre><code>export const serviceID = 'YOUR_SERVICE_ID';</code></pre>

        <code>template_config.js:</code>
        <pre><code>export const templateID = 'YOUR_TEMPLATE_ID';</code></pre>

        <code>config.js:</code>
        <pre><code>export const EMAILJS_USER_ID = 'YOUR_EMAILJS_USER_ID';</code></pre>

        <p><strong>Include EmailJS script:</strong></p>
        <p>Make sure to include the EmailJS script in your HTML file:</p>
        <pre><code>&lt;script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js">&lt;/script>
&lt;script type="text/javascript">
    (function() {
        emailjs.init('YOUR_EMAILJS_USER_ID');
    })();
&lt;/script></code></pre>

        <h2>Example</h2>
        <p>Here is a brief overview of how the <code>script.js</code> file works:</p>
        <pre><code>// Importing keys from separate config files
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
});</code></pre>

        <h2>Usage</h2>
        <p><strong>Open the contact form:</strong></p>
        <p>Navigate to the page with the contact form.</p>
        <p><strong>Fill out the form:</strong></p>
        <p>Enter your details and message.</p>
        <p><strong>Submit the form:</strong></p>
        <p>Click on the submit button to send the email.</p>

        <h2>Important Note!</h2>
        <p>This method of sending emails is not secure. It exposes your API key and other sensitive information in the client-side code, which can be accessed by anyone visiting your site. For production applications, consider using a server-side solution to handle sensitive information securely.</p>
    </div>

    <script>
        const toggleButton = document.getElementById('toggleButton');
        const moreInfo = document.getElementById('moreInfo');

        toggleButton.addEventListener('click', () => {
            if (moreInfo.classList.contains('hidden')) {
                moreInfo.classList.remove('hidden');
                toggleButton.textContent = 'Hide Info';
            } else {
                moreInfo.classList.add('hidden');
                toggleButton.textContent = 'Show More Info';
            }
        });
    </script>
</body>
</html>
