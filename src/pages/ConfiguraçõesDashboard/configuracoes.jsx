import React from "react";
import { FaPen } from "react-icons/fa"; // Ícone do lápis
import NavComp from "../../componentes/Navbar/Navbar"
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard"
import styles from "./configuracoes.module.css";

const Configuracoes = () => {
  return (
    <>
      
      <NavComp />

      <div className={styles.configuracoesContainer}>
        <h1 className={styles.tituloPagina}>Configurações da conta</h1>
        <div className={styles.secoesConfiguracoes}>
         
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Detalhes do casamento</h2>
              <FaPen className={styles.iconEdit} />
            </div>
            <p>
              <strong>Nome:</strong> Amanda Sousa
            </p>
            <p>
              <strong>Nome do seu amor:</strong> Enzo Martins
            </p>
            <p>
              <strong>Data do casamento:</strong> Adicionar
            </p>
            <p>
              <strong>Contagem de convidados:</strong> Adicionar
            </p>
            <p>
              <strong>Cidade:</strong> São Paulo - SP
            </p>
            <p>
              <strong>Telefone:</strong> 11981819900
            </p>
          </div>

         
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Detalhes da conta</h2>
              <FaPen className={styles.iconEdit} />
            </div>
            <p>
              <strong>Endereço de email:</strong> amandasbapt@outlook.com
            </p>
            <p>
              <strong>Senha:</strong> *********
            </p>
          </div>
        </div>
      </div>

     
      <Baseboard />
    </>
  );
};

export default Configuracoes;
