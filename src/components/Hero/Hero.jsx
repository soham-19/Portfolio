import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/pp.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Soham</h1>
        <p className={styles.description}>
          I'm a final year computer engineering student with expertise in stack MERN stack development.
          I also have deep passion for the data structures and algorithms.
          I am working on machine learning projects currently
          Let's connect to discuss exciting opportunities!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br></br>
        <a href="https://drive.google.com/file/d/1kj9-qqdVwv7JxB4oCmrDR1USl2jlVQTi/view?usp=sharing" className={styles.contactBtn}>
          Download My Resume
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};