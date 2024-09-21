import UltimaSessao from "./UltimaSessao";
import PropTypes from "prop-types";
import "../css/Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <UltimaSessao />
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
