import React from 'react';
import './contact.css';

const Contact = () => {
  return (
      <section className="contact" id="contact">
          <h2 className="heading">Contact<span>ME!</span></h2>
          <form action="#" name="submit-to-google-sheet">
              <div className="input-box">
                  <input type="text" name="Name" placeholder="Full Name" />
                  <input type="email" name="Email Address" placeholder="Email Address" />
              </div>
              <div className="input-box">
                  <input type="number" name="Mobile Number" placeholder="Mobile Number" />
                  <input type="text" name="Email Subject" placeholder="Email Subject" />
              </div>
              <textarea name="Your Message" cols="30" rows="10" placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" className="btn" />
          </form>
          <span id="msg"></span>
      </section>
  );
};

export default Contact;