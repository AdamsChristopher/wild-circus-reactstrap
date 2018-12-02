import React from 'react';

import ContactForm from './ContactForm';

import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div
      id="Contact-Us"
      className="d-flex flex-column my-5"
    >
      <h2 className="text-center">Contact Us</h2>
      <ContactForm />
    </div>
  )
}

export default ContactUs;