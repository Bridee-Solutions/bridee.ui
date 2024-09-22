import { useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "../css/Features.module.css";

const Features = ({ className = "" }) => {
  const onComeceAgoraTextClick = useCallback(() => {
    // Página de cadastro
  }, []);

  return (
    <section className={`${styles.features} ${className}`}>
      <div className={styles.featureList}>
        <div className={styles.planningFeature}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.planejeSeuCasamento}>
              Planeje seu casamento de forma simples e prática com a bridee.
            </div>
            <div className={styles.planningButton}>
              <div className={styles.frameParent}>
                <div className={styles.comeceAgoraWrapper}>
                  <div
                    className={styles.comeceAgora}
                    onClick={onComeceAgoraTextClick}
                  >
                    Comece agora
                  </div>
                </div>
                <img
                  className={styles.weuiarrowFilledIcon}
                  loading="lazy"
                  alt=""
                  src="/weuiarrowfilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.costCalculator}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.calculatorIcon}>
              <img
                className={styles.loupe11}
                loading="lazy"
                alt=""
                src="/loupe-1-1@2x.png"
              />
            </div>
            <div className={styles.calculeOsCustosContainer}>
              <b>Calcule</b>
              <span className={styles.osCustosDo}>
                {" "}
                os custos do seu casamento conforme suas escolhas.
              </span>
            </div>
          </div>
        </div>
        <FrameComponent
          networking1="/networking-1@2x.png"
          encontreOsMelhores="Encontre os melhores  "
          assessores="assessores"
          paraOSeuGrandeDia=" para o seu grande dia."
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameInner} />
          <div className={styles.listaDeTarefas1Wrapper}>
            <img
              className={styles.listaDeTarefas1Icon}
              loading="lazy"
              alt=""
              src="/listadetarefas-1@2x.png"
            />
          </div>
          <div className={styles.gerencieEConfirmeContainer}>
            <span className={styles.gerencieE}>{`Gerencie e `}</span>
            <b>confirme</b>
            <span className={styles.gerencieE}> presenças facilmente.</span>
          </div>
        </div>
        <FrameComponent
          propWidth="unset"
          propAlignSelf="unset"
          networking1="/pinterest-1@2x.png"
          propHeight="unset"
          propWidth1="204.8px"
          encontreOsMelhores="Importe inspirações do "
          assessores="Pinterest"
          paraOSeuGrandeDia=" para o seu planejamento."
        />
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
