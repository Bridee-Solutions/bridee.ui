import React from "react";
import styles from "../css/Newsletter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

library.add(faEnvelope);

function Newsletter() {
    return (
      <section className={styles.newsletter}>
        <div className={styles.container}>
          <h1>A maneira fácil de planejar</h1>
          <div className={styles.container_input}>
          <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: '#494949'}}/>
            <input type="text" placeholder=" Seu endereço de email"/>
            <button>COMECE A PLANEJAR</button>
          </div>
          <p>Já tem uma conta? <a href="">Entrar</a></p>
          <p>Você é um assessor? <a href="">Crie uma conta aqui</a></p>
        </div>
      </section>
    );
  }
  
  export default Newsletter;