import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '', mobile: '', subject: '', message: '' };

        // Name validation: no numbers, special characters except periods
        if (!/^[a-zA-Z\s.]+$/.test(formData.name)) {
            newErrors.name = 'Name should only contain letters, spaces, and periods.';
            valid = false;
        }

        // Email validation: must contain @
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address with "@" symbol.';
            valid = false;
        }

        // Mobile number validation: only numbers and dashes allowed
        if (!/^[0-9-]+$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number should only contain numbers and dashes.';
            valid = false;
        }

        // Email subject validation: must contain @
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.subject)) {
            newErrors.subject = 'Email subject must contain a valid email format.';
            valid = false;
        }

        // Message validation: should not be empty
        if (formData.message.trim() === '') {
            newErrors.message = 'Message field cannot be empty.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitStatus('Form submitted successfully!');
            console.log('Form submitted successfully:', formData);
            // Clear form data if desired
            setFormData({
                name: '',
                email: '',
                mobile: '',
                subject: '',
                message: ''
            });
        } else {
            setSubmitStatus('Form submission failed. Please correct the errors and try again.');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact<span>ME!</span></h2>
            <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Email Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                </div>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
                <input type="submit" value="Send Message" className="btn" />
            </form>
            <span id="msg" className="status-message">{submitStatus}</span>
        </section>
    );
};

export default Contact;
