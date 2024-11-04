import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ imageUrl, title, subtitle, children }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.conteudo}>
        <div className={styles.infos}>
          <h1>{title}</h1>
        </div>
        <div className={styles.sub}>
          <span>{subtitle}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Banner;
