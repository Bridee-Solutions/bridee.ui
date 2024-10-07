import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Painel.module.css";
import { React, useState } from "react";

function Painel() {
  const [imageUrl, setImageUrl] = useState(null); 
 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); 
      setImageUrl(url); 
    }
  };
 
  return (
    <div className={styles.painelBackground}>
      <Navbar />
      <div className={styles.containerPai}>
        <div className={styles.containerRegulador}>
          <div className={styles.containerDireita}>
            <div className={styles.containerImagem}>
              <div className={styles.imagem}>
              <input
                  type="file"
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className={styles.inputImagem} 
                />
                 {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Imagem Selecionada"
                    className={styles.imagemCirculo} 
                  />
                )}
              </div>
            </div>

            <div className={styles.containerInfos}>
              <div>
                <span>Bem vindo de volta, </span>
                <span className={styles.nomeUsuario}>Usuário & Parceiro</span>
              </div>

              <div>
                <div className={styles.icon}>
                  <span>Data</span>
                </div>
              </div>

              <div>
                <div className={styles.icon}>
                  <span>convidados</span>
                </div>
              </div>

              <div>
                <div className={styles.icon}>
                  <span>Local</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerContagem}></div>
        </div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.content}>
            <div className={styles.container_titulodesc}>
              <div className={styles.caixa}>
                <span className={styles.titulo_clnesq}>Meus Fornecedores</span>
                <span className={styles.descricao}>
                  Lorem ipsum lorem ipsum lorem ipsum
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.colunaDireita}></div>
      </div>
    </div>
  );
}

export default Painel;