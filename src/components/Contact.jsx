import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
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
            newErrors.email = 'Please enter a valid email address.';
            valid = false;
        }

        // Mobile number validation: only numbers and dashes allowed
        if (!/^[0-9-]+$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number should only contain numbers and dashes.';
            valid = false;
        }

        // Subject validation: should not be empty
        if (formData.subject.trim() === '') {
            newErrors.subject = 'Subject field cannot be empty.';
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
            emailjs.sendForm(
                'service_zhhony5', 
                'template_xob7odg', 
                form.current,
                'btT7U8uvjfNvjmZzg' 
            )
            .then((result) => {
                setSubmitStatus('Message sent successfully!');
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                setSubmitStatus('Failed to send message. Please try again.');
                console.error('EmailJS Error:', error);
            });
        } else {
            setSubmitStatus('Please correct the errors and try again.');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact<span>ME!</span></h2>
            <form ref={form} onSubmit={handleSubmit} name="submit-to-google-sheet">
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
