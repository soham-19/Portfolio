import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showHeart, setShowHeart] = useState(false);

  let lastTap = null;

  const handleDoubleClick = () => {
    const now = Date.now();
    if (lastTap && (now - lastTap) < 300) {
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
      }, 800); // Duration of the heart animation
    }
    lastTap = now;
  };

  return (
    <div className={styles.container} onClick={handleDoubleClick}>
      {showHeart && <div className={styles.heart}><i className="fas fa-heart"></i></div>}
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Live Link
        </a>
        <a href={source} className={styles.link}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
