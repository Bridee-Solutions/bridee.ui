import React from 'react';
import styles from './Card.module.css';
import seta from '../../assets/seta.png'

const Card = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.icon}>
            <img src={seta} alt="seta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
