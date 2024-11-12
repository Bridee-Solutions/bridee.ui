import React from "react";
import styles from "./CardNavegacao.module.css";
import seta from "../../assets/locais/seta.svg";
const Card = ({ nome = "", imagem = "", onClick }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imagem})` }}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{nome}</span>
      </div>
      <div className={styles.containerButton} onClick={onClick}>
        <div className={styles.seta}>
          <img src={seta} />
        </div>
      </div>
    </div>
  );
};

export default Card;
