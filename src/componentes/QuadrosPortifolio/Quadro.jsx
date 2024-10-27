import React from "react";
import styles from "./Quadros.module.css";
import line from "../../assets/line.svg";

export const Quadro = ({ title, image, rating, reviews, location, description, estrela }) => {
  return (
    <div className={styles.quadro}>
      <img className={styles.image} alt={title} src={image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.ratingContainer}>
          <img src={estrela} alt="Estrela" className={styles.estrela} />
          <span className={styles.rating}>{rating}</span>
          <span className={styles.reviews}>({reviews})</span>
          <img src={line} alt="Traço" className={styles.traco} />
          <span className={styles.location}>{location}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
       <div className={styles.button_div}>
          <button className={styles.button}>Solicitar orçamento</button>
       </div>
    </div>
  );
};
