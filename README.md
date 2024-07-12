**My Personal Portfolio**

This portfolio is a continuous work in progress and will keep evolving as I improve my skills. Feel free to explore and provide feedback!

**Clone the Portfolio Repository**

Open your terminal or command prompt


Run the following command to clone the repository:

**git clone https://github.com/JOSHUA-A69/My-Personal-Portfolio-**

**Setting Up EmailJS for Contact Form:**

**Step 1:** Sign Up for EmailJS

Go to the EmailJS website.

Sign up for a free account if you don't already have one.

**Step 2:** Create an EmailJS Service

Once logged in, navigate to the "Email Services" section.

Click "Add new service" and follow the prompts to configure your email service. You will link it to your email provider (such as Gmail, Outlook, etc.).

**Step 3:** Create an EmailJS Template

Go to the "Email Templates" section.

**Step 4:** Obtain Your EmailJS API Key

Go to the "Account" section (usually under your profile or settings).

You will find your User ID here, which acts as your API key.

**Step 5:** Obtain Your Service ID and Template ID

Go to the "Email Services" section and select the service you created. Your Service ID will be listed there.

Go to the "Email Templates" section and select the template you created. Your Template ID will be listed there.

**Integrating EmailJS with the Contact Form:**

**Create configuration files**:
    You need to create three configuration files to store your EmailJS keys.

    - `service_config.js`:
        ```javascript
        export const serviceID = 'YOUR_SERVICE_ID';
        ```

    - `template_config.js`:
        ```javascript
        export const templateID = 'YOUR_TEMPLATE_ID';
        ```

    - `config.js` (located in the `pages` directory):
        ```javascript
        export const EMAILJS_USER_ID = 'YOUR_EMAILJS_USER_ID';
        ```

 **Include EmailJS script**:
    Make sure to include the EmailJS script in your HTML file:
    ```html
    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            emailjs.init('YOUR_EMAILJS_USER_ID');
        })();
    </script>
    ```

    **Example**

Here is a brief overview of how the `script.js` file works:

```javascript
// Importing keys from separate config files
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

**Usage**

1. **Open the contact form**:
    Navigate to the page with the contact form.

2. **Fill out the form**:
    Enter your details and message.

3. **Submit the form**:
    Click on the submit button to send the email.




Important Note!
This method of sending emails is not secure. It exposes your API key and other sensitive information in the client-side code, which can be accessed by anyone visiting your site. For production applications, consider using a server-side solution to handle sensitive information securely.

For more details and updates, visit the <a href="https://joshua-a69.github.io/My-Personal-Portfolio-/">portfolio.</a>

⭐️ Star the Repo
If you find this project helpful or interesting, please consider starring the repository! Your support is greatly appreciated and motivates me to continue improving and adding new features.