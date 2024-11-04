import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} className={styles.image} />}
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.containerDescricao}>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button}>Solicitar orçamento</button>
      </div>
    </div>
  );
};

export default Card;
