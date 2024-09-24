import React from "react";
import styles from '../css/Planin.module.css';

const Plannin = () => {
    return (
        <section className={styles.planWeddingContainer}>
          {/* Cartão à esquerda */}
          <div className={styles.leftCard}>
            <h2 className={styles.leftCardTitle}>
              Planeje seu casamento de forma simples e prática com a bridee.
            </h2>
            <button className={styles.leftCardButton}>
              Comece agora <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
    
          {/* Cartões de funcionalidades */}
          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <img src="/assets/loupe.png" alt="Calcule" className={styles.featureIcon} />
              <p className={styles.featureText}>
                <b>Calcule</b> os custos do seu casamento conforme suas escolhas.
              </p>
            </div>
            <div className={styles.featureCard}>
              <img src="/assets/networking.png" alt="Assessores" className={styles.featureIcon} />
              <p className={styles.featureText}>
                Encontre os melhores <b>assessores</b> para o seu grande dia.
              </p>
            </div>
            <div className={styles.featureCard}>
              <img src="/assets/checklist.png" alt="Gerencie" className={styles.featureIcon} />
              <p className={styles.featureText}>
                <b>Gerencie</b> e confirme presenças facilmente.
              </p>
            </div>
            <div className={styles.featureCard}>
              <img src="/assets/pinterest.png" alt="Pinterest" className={styles.featureIcon} />
              <p className={styles.featureText}>
                Importe inspirações do <b>Pinterest</b> para o seu planejamento.
              </p>
            </div>
          </div>
        </section>
      );
    };
    

export default Plannin;
