'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
import Image from 'next/image';

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
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
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
    <div className={styles.contactContainer}>
      <div className={styles.contactHero}>
        <div className={styles.imageContainer}>
          <Image
            src="/Images/spike_bomb.png"
            alt="Contact Hero"
            layout="fill"
            objectFit="cover"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Contact Me</h1>
          <p className={styles.description}>
            I&apos;m excited to connect with you! Whether you have a question, a project idea, work or just want to say hello, feel free to reach out. Fill out the form or send me a message directly.
          </p>
          <div className={styles.contactSocials}>
            <a href="https://www.linkedin.com/in/tim-christoffer/" target="_blank" rel="noopener noreferrer">
              <Image src="/Icons/linkedin.svg" alt="LinkedIn" className={styles.socialIcon} width={24} height={24} />
            </a>
            <a href="https://github.com/timchristoffer" target="_blank" rel="noopener noreferrer">
              <Image src="/Icons/github.svg" alt="GitHub" className={styles.socialIcon} width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={closeModal}>&times;</span>
              <p>Message sent successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;