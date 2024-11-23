import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css'; 

const LinkButton = ({ to, label, onClick}) => {
  return (
    <Link to={to}>
      <button className={styles.botao} onClick={onClick}>
        {label}
      </button>
    </Link>
  );
};

export default LinkButton;
