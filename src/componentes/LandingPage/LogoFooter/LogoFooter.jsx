import React from "react";
import styles from "./LogoFooter.module.css";

function LogoFooter () {
    return (
        <div className={styles.containerEsquerda}>
          <div className={styles.footer_logo}>
            <div className={styles.container_logo}>
              <span>
                bridee<b>.</b>
              </span>
            </div>
            <div className={styles.container_subtitulo}>
              <span>O match perfeito para o dia dos seus sonhos</span>
            </div>
          </div>
        </div>
      ); 
};

export default LogoFooter;