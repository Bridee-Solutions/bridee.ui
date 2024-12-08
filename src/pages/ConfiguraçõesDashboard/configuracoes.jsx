import React from "react";
import { FaPen } from "react-icons/fa";
import NavComp from "../../componentes/Navbar/Navbar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./configuracoes.module.css";

const Configuracoes = () => {
  return (
    <>
      <NavComp />

      <div className={styles.container}>
        <div className={styles.configuracoesContainer}>
          <div className={styles.colunas}>
            <span className={styles.tituloPagina}>Configurações da conta</span>
            <div className={styles.secoesConfiguracoes}>
              <div className={styles.card}>
                <div className={styles.textosCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.tituloCard}>
                      Detalhes do casamento
                    </span>
                    <div className={styles.pencil}>
                      <div>
                        <FaPen className={styles.iconEdit} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.containerText}>
                    <div className={styles.cardContent}>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>Nome</span>
                        <span className={styles.value}>Amanda Sousa</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>Nome do seu amor</span>
                        <span className={styles.value}>Enzo Martins</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>Data do casamento</span>
                        <span className={styles.value}>Adicionar</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>
                          Contagem de convidados
                        </span>
                        <span className={styles.value}>Adicionar</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>Cidade</span>
                        <span className={styles.value}>São Paulo - SP</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.label}>Telefone</span>
                        <span className={styles.value}>11981819900</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.textosCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.tituloCard2}>
                      Detalhes da conta
                    </span>
                    <div className={styles.pencil}>
                      <div>
                        <FaPen className={styles.iconEdit} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.detailRow}>
                      <span className={styles.label}>Endereço de email</span>
                      <span className={styles.value}>
                        amandasbapt@outlook.com
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.label}>Senha</span>
                      <span className={styles.value}>*********</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Baseboard />
    </>
  );
};

export default Configuracoes;
