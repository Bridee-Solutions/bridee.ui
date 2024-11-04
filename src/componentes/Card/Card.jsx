import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl, bairro = "N/A", cidade = "N/A"}) => {
    const truncarDescricao = (desc) => {
        if (desc.length > 295) {
          return desc.substring(0, 295) + "...";
        }
        return desc;
      };

    

      const capitalizarPrimeirasLetras = (texto) => {
        return texto
            .toLowerCase()
            .split(" ")
            .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(" ");
    };

    const tituloFormatado =
    capitalizarPrimeirasLetras(title).length > 24
        ? capitalizarPrimeirasLetras(title).substring(0, 24) + "..."
        : capitalizarPrimeirasLetras(title);


  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} className={styles.image} />}
      <div className={styles.titleContainer}>
        <span className={styles.title}>{tituloFormatado}</span>
      </div>
      <div className={styles.localidade}>
        <span className={styles.bairro}> {capitalizarPrimeirasLetras(bairro)}, {capitalizarPrimeirasLetras(cidade)}</span>
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
