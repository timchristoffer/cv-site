'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_q3gfap4', // Replace with your Email.js service ID
      'template_bej7c1g', // Replace with your Email.js template ID
      formData,
      'BLTPImPCO4JZzgYXa' // Replace with your Email.js user ID
    )
    .then((result) => {
      console.log(result.text);
      setShowModal(true);
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles['contact-form-container']}>
      <h2>Contact Me</h2>
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles['submit-button']}>Send Message</button>
      </form>

      {showModal && (
        <div className={styles['modal']}>
          <div className={styles['modal-content']}>
            <span className={styles['close']} onClick={closeModal}>&times;</span>
            <p>Message sent successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;