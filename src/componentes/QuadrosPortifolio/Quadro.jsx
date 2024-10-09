import React from "react";
import styles from "./Quadros.module.css";

const Quadro = ({ title, company, image, rating, reviews, location, description, estrela, line }) => {
  return (
    <div className={styles["group"]}>
      <div className={styles["overlap-group"]}>
        <div className={styles["text-wrapper"]}>{title}</div>
        <div className={styles["fundo-base"]} />
        <div className={styles["div-wrapper"]}>
          <div className={styles["div"]}>Solicitar orçamento</div>
        </div>
        <img className={styles["mask-group"]} alt={company} src={image} />
        <div className={styles["div-wrapper-2"]}>{company}</div>
        <div className={styles["div-2"]}>
          <img className={styles["material-symbols"]} alt="Estrela" src={estrela} />
          <p className={styles["element"]}>
            <span className={styles["span"]}>{rating} </span>
            <span className={styles["text-wrapper-3"]}>({reviews})</span>
          </p>
          <img className={styles["pepicons-pop-line-x"]} alt="Linha" src={line} />
          <p className={styles["text-wrapper-4"]}>{location}</p>
        </div>
        <p className={styles["p"]}>{description}</p>
      </div>
    </div>
  );
};

export default Quadro;
