import PropTypes from "prop-types";
import "../css/PlannerDescription.module.css";

const PlannerDescription = ({ className = "" }) => {
  return (
    <div className={`planner-description ${className}`}>
      <h1 className="voc-um">Você é um assessor de casamento?</h1>
      <div className="imagem3-parent">
        <img
          className="imagem3-icon"
          loading="lazy"
          alt=""
          src="/imagem3@2x.png"
        />
        <div className="gerencie-sua-agenda-container">
          <span>
            <p className="gerencie-sua-agenda">{`Gerencie sua agenda e encontre noivas de forma fácil e rápida. `}</p>
            <p className="gerencie-sua-agenda">
              Nossa plataforma conecta você a casais e oferece ferramentas para
              organizar todos os detalhes do casamento.
            </p>
            <p className="facilite-seu-trabalho">
              Facilite seu trabalho e crie momentos inesquecíveis.
            </p>
          </span>
        </div>
      </div>
      <button className="boto1">
        <div className="boto-item" />
        <div className="comece-agora1">COMECE AGORA!</div>
      </button>
      <div className="voc-j-tem-container">
        <span className="voc-j-tem">{`Você já tem um perfil de assessor? `}</span>
        <span className="faa-login-agora">Faça login agora</span>
      </div>
    </div>
  );
};

PlannerDescription.propTypes = {
  className: PropTypes.string,
};

export default PlannerDescription;
