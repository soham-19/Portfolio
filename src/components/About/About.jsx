import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Know me</h2>
      <div className={styles.content}>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>MERN Developer</h3>
            <p>
              I'm a MERN stack developer adept at creating optimized websites.
              I specialize in MongoDB and SQL databases, with over three hosted
              sites demonstrating my skills.
            </p>
          </div>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Computer Vision Analyst</h3>
            <p>
              I specialize in computer vision using Python, utilizing a range
              of powerful libraries. My expertise allows me to create robust
              solutions for visual data analysis and automation.
            </p>
          </div>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Data Structures Enthusiast</h3>
            <p>
              I'm passionate about data structures and algorithms. I've solved
              over 500 algorithmic problems online, honing my problem-solving
              skills and algorithmic thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};