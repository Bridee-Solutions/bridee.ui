import React from "react";
import styles from "./Card.module.css";
const Card = ({
  nome,
  descricao,
  imageUrl,
  bairro = "N/A",
  cidade = "N/A",
  onClick,
}) => {
  const truncarDescricao = (desc) => {
    if (desc && desc.length > 295) {
      // Verifica se desc existe e se tem mais de 295 caracteres
      return desc.substring(0, 295) + "...";
    }
    return desc || ""; // Retorna desc ou uma string vazia caso desc seja undefined
  };

  const capitalizarPrimeirasLetras = (texto) => {
    if(texto != undefined){
      return texto
        .toLowerCase()
        .split(" ")
        .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(" ");
    }
  };

  const tituloFormatado =
    capitalizarPrimeirasLetras(nome).length > 24
      ? capitalizarPrimeirasLetras(nome).substring(0, 24) + "..."
      : capitalizarPrimeirasLetras(nome);

  return (
    <div className={styles.card}>
      {imageUrl && (
        <img src={`${imageUrl}`} className={styles.image} />
      )}
      <div className={styles.titleContainer}>
        <span className={styles.title}>{tituloFormatado}</span>
      </div>
      <div className={styles.localidade}>
        <span className={styles.bairro}>      
          {capitalizarPrimeirasLetras(bairro)},  
           {capitalizarPrimeirasLetras(cidade)}
        </span>
      </div>
      <div className={styles.containerDescricao}>
        <span className={styles.description}>
          {truncarDescricao(descricao)}
        </span>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.button} onClick={onClick}>
          Solicitar orçamento
        </button>
      </div>
    </div>
  );
};

export default Card;
