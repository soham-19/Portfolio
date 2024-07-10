import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <p>Feel free to get in touch!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
              className={styles.icon}
            />
            <a href="mailto:sohamkulkarni213@@gmail.com">sohamkulkarni213@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            <a href="https://www.linkedin.com/in/sohamkulkarni">linkedin.com/sohamkulkarni</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
              className={styles.icon}
            />
            <a href="https://www.github.com/soham-19">github.com/soham-19</a>
          </li>
        </ul>
      </div>
      <div className={styles.formContainer}>
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};
