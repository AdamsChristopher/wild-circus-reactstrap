import React from 'react';

import ContactForm from './ContactForm';

import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div
      id="Contact-Us"
      className="my-4"
    >
      <h2 className="text-center">Contact Us</h2>
      <ContactForm />
    </div>
  )
}

export default ContactUs;