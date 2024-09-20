import Opinio from "./Opinio";
import PropTypes from "prop-types";
import styles from "../css/NossosClientes.module.css";

const NossosClientes = ({ className = "" }) => {
  return (
    <section className={`${styles.nossosClientes} ${className}`}>
      <div className={styles.fundo}></div>
      <div className={styles.tituloAvaliacoes}>
        <h1 className={styles.avaliacoesUsuarios}>
          Avaliações dos nossos usuários
        </h1>
      </div>
      <div className={styles.depoimentos}>
        <Opinio
          bxsquoteLeft="/bxsquoteleft.svg"
          bxsquoteLeft1="/bxsquoteleft-1@2x.png"
          image="/image-4@2x.png"
          nome="Isabela Cambui"
          descricao="Noiva"
        />
        <Opinio
          bxsquoteLeft="/bxsquoteleft-2.svg"
          bxsquoteLeft1="/bxsquoteleft-3@2x.png"
          image="/image-5@2x.png"
          nome="Enzo Martins"
          descricao="Noivo"
        />
        <Opinio
          bxsquoteLeft="/bxsquoteleft-4.svg"
          bxsquoteLeft1="/bxsquoteleft-5@2x.png"
          image="/image-6@2x.png"
          nome="Aghata Paula"
          descricao="Assessora"
        />
      </div>
    </section>
  );
};

NossosClientes.propTypes = {
  className: PropTypes.string,
};

export default NossosClientes;
