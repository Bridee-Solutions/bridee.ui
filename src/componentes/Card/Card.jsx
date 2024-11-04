import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl }) => {
    const truncarDescricao = (desc) => {
        if (desc.length > 295) {
          return desc.substring(0, 295) + "...";
        }
        return desc;
      };

      const tituloLimitado =
      title.length > 24 ? title.substring(0, 24) + "..." : title;
  
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} className={styles.image} />}
      <div className={styles.titleContainer}>
        <span className={styles.title}>{tituloLimitado}</span>
      </div>
      <div className={styles.containerDescricao}>
        <span className={styles.description}>{truncarDescricao(description)}</span>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button}>Solicitar orçamento</button>
      </div>
    </div>
  );
};

export default Card;
