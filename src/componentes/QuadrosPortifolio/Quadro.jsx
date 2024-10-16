import React from "react";
import styles from "./Quadros.module.css";

export const Quadro = ({ title, image, rating, reviews, location, description, estrela, line }) => {
  return (
    <div className={styles["container"]}>
    <div className={styles["group"]}>
      <div className={styles["imagem"]}>
      <img className={styles["mask-group"]} alt={title} src={image} />
      </div>

<div className={styles["body"]}>
      <div className={styles["text-wrapper"]}>{title}</div>
      
      <div className={styles["div-wrapper-2"]}>
        <img className={styles["material-symbols"]} alt="Estrela" src={estrela} />
        <p className={styles["element"]}>
          <span className={styles["span"]}>{rating} </span>
          <span className={styles["text-wrapper-3"]}>({reviews})</span>
        </p>
      </div>

      <p className={styles["text-wrapper-4"]}>{location}</p>
      
      <p className={styles["p"]}>{description}</p>
      <div className={styles["button"]}>
      <div className={styles["div"]}>Solicitar orçamento</div></div>
    </div></div></div>
  );
};
