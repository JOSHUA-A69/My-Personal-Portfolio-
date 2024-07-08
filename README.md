My Personal Portfolio

This portfolio is a continuous work in progress and will keep evolving as I improve my skills. Feel free to explore and provide feedback!

Clone the Portfolio Repository

Open your terminal or command prompt.

Run the following command to clone the repository:
git clone https://github.com/JOSHUA-A69/My-Personal-Portfolio-

Setting Up EmailJS for Contact Form:

Step 1: Sign Up for EmailJS

Go to the EmailJS website.

Sign up for a free account if you don't already have one.

Step 2: Create an EmailJS Service

Once logged in, navigate to the "Email Services" section.

Click "Add new service" and follow the prompts to configure your email service. You will link it to your email provider (such as Gmail, Outlook, etc.).

Step 3: Create an EmailJS Template

Go to the "Email Templates" section.

Step 4: Obtain Your EmailJS API Key

Go to the "Account" section (usually under your profile or settings).

You will find your User ID here, which acts as your API key.

Step 5: Obtain Your Service ID and Template ID

Go to the "Email Services" section and select the service you created. Your Service ID will be listed there.

Go to the "Email Templates" section and select the template you created. Your Template ID will be listed there.

Integrating EmailJS with the Contact Form

Modify contact.html


Replace the initialization script with your actual EmailJS API key:

<script type="text/javascript">

    (function () { emailjs.init("YOUR_API_KEY_HERE");
    })
    ();

</script>


Modify script.js


Replace the placeholders with your actual Service ID and Template ID:

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = "YOUR_SERVICE_ID_HERE";
    const templateID = "YOUR_TEMPLATE_ID_HERE";

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
        }, error => {
            console.log('FAILED...', error);
        });



Important Note!
This method of sending emails is not secure. It exposes your API key and other sensitive information in the client-side code, which can be accessed by anyone visiting your site. For production applications, consider using a server-side solution to handle sensitive information securely.

For more details and updates, visit the <a href="https://joshua-a69.github.io/My-Personal-Portfolio-/">portfolio.</a>

⭐️ Star the Repo
If you find this project helpful or interesting, please consider starring the repository! Your support is greatly appreciated and motivates me to continue improving and adding new features.