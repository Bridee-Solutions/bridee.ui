import React from "react";
import styles from "./Configuracoes.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/LandingPage/Footer/Footer";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import SobreNegocio from "../../componentes/SobreNegocio/SobreNegocio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUser } from '@fortawesome/free-solid-svg-icons';
const Configuracoes = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.tudo}>
        <div className={styles.centro}>
          <div className={styles.colunaEsquerda}>
            <div className={styles.containerTitulo}>
              <span>Minha conta</span>
            </div>
            <div className={styles.opcoesConta}>
              <div className={styles.itemConta}>
              <FontAwesomeIcon icon={faHandshake} className={styles.icone} style={{ color: '#EB9B9A' }} />
              <span>Meu negócio</span>
              </div>
              <div className={styles.itemConta}>
              <FontAwesomeIcon icon={faUser} className={styles.icone} style={{ color: '#EB9B9A' }} />
              <span>Contato</span>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
            <div className={styles.containerTituloDireita}>
              <div className={styles.titulo}>
                <span>Sobre o seu negócio</span>
              </div>
              <div className={styles.subtitulo}>
                <span>
                  Essas informações aparecerão no seu perfil público para que os
                  clientes conheçam melhor seu trabalho e suas especialidades
                </span>
              </div>
            </div>
            <div className={styles.negocio}>
              <SobreNegocio />
            </div>
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
};

export default Configuracoes;
