import UltimaSessao from "./UltimaSessao";
import PropTypes from "prop-types";
import styles from "../css/Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`${styles.footer} ${className}`}>
      <UltimaSessao />
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
