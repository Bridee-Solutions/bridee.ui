import { useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "../css/Features.module.css";

const Features = ({ className = "" }) => {
  const onComeceAgoraTextClick = useCallback(() => {
    // Please sync "Página de cadastro" to the project
  }, []);

  return (
    <section className={`features ${className}`}>
      <div className="feature-list">
        <div className="planning-feature">
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="planeje-seu-casamento">
              Planeje seu casamento de forma simples e prática com a bridee.
            </div>
            <div className="planning-button">
              <div className="frame-parent">
                <div className="comece-agora-wrapper">
                  <div
                    className="comece-agora"
                    onClick={onComeceAgoraTextClick}
                  >
                    Comece agora
                  </div>
                </div>
                <img
                  className="weuiarrow-filled-icon"
                  loading="lazy"
                  alt=""
                  src="/weuiarrowfilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cost-calculator">
          <div className="rectangle-container">
            <div className="frame-inner" />
            <div className="calculator-icon">
              <img
                className="loupe-1-1"
                loading="lazy"
                alt=""
                src="/loupe-1-1@2x.png"
              />
            </div>
            <div className="calcule-os-custos-container">
              <b>Calcule</b>
              <span className="os-custos-do">
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
        <div className="frame-div">
          <div className="frame-inner" />
          <div className="lista-de-tarefas-1-wrapper">
            <img
              className="lista-de-tarefas-1-icon"
              loading="lazy"
              alt=""
              src="/listadetarefas-1@2x.png"
            />
          </div>
          <div className="gerencie-e-confirme-container">
            <span className="gerencie-e">{`Gerencie e `}</span>
            <b>confirme</b>
            <span className="gerencie-e"> presenças facilmente.</span>
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
