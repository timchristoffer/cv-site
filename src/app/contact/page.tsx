import React from 'react'

import NavBar from "@/components/NavBar/NavBar";
import ContactForm from '@/components/ContactForm/ContactForm';
import Copyright from '@/components/Copyright/Copyright';

const ContactPage = () => {
  return (
    <div>
        <NavBar />
      <div className="contact-container">
      <ContactForm />
      </div>
      <Copyright />
    </div>
  )
}

export default ContactPage
