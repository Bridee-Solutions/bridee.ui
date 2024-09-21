import Opinio from "./Opinio";
import PropTypes from "prop-types";
import "../css/NossosClientes.module.css";

const NOSSOSCLIENTES = ({ className = "" }) => {
  return (
    <section className={`nossos-clientes ${className}`}>
      <div className="fundo" />
      <div className="client-reviews-title">
        <h1 className="avaliaes-dos-nossos">Avaliações dos nossos usuários</h1>
      </div>
      <div className="depoimentos">
        <Opinio
          bxsquoteLeft="/bxsquoteleft.svg"
          bxsquoteLeft1="/bxsquoteleft-1@2x.png"
          image="/image-4@2x.png"
          isabelaCambui="Isabela Cambui"
          noiva="Noiva"
          group8="/group-8.svg"
        />
        <Opinio
          bxsquoteLeft="/bxsquoteleft-2.svg"
          bxsquoteLeft1="/bxsquoteleft-3@2x.png"
          image="/image-5@2x.png"
          propPadding="10px 0px 0px"
          isabelaCambui="Enzo Martins"
          noiva="Noivo"
          group8="/group-7.svg"
        />
        <Opinio
          bxsquoteLeft="/bxsquoteleft-4.svg"
          bxsquoteLeft1="/bxsquoteleft-5@2x.png"
          image="/image-6@2x.png"
          propPadding="12px 0px 0px"
          isabelaCambui="Aghata Paula"
          noiva="Assessora"
          group8="/group-6.svg"
        />
      </div>
    </section>
  );
};

NOSSOSCLIENTES.propTypes = {
  className: PropTypes.string,
};

export default NOSSOSCLIENTES;
