import React from "react";
import styles from "./Quadros.module.css";

export const Quadro = ({ title, image, rating, reviews, location, description, estrela }) => {
  return (
    <div className={styles.quadro}>
      <img className={styles.image} alt={title} src={image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.ratingContainer}>
          <img src={estrela} alt="Estrela" className={styles.estrela} />
          <p>
            <span className={styles.rating}>{rating}</span> ({reviews})
          </p>
        </div>
        <p className={styles.location}>{location}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Solicitar orçamento</button>
      </div>
    </div>
  );
};
