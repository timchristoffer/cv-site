import React from 'react'

import NavBar from "@/components/NavBar/NavBar";
import ContactForm from '@/components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <div>
        <NavBar />
      <div className="contact-container">
      <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
