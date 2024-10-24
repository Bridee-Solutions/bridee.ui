import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css'; 

const LinkButton = ({ to, label}) => {
  return (
    <Link to={to}>
      <button className={styles.botao}>
        {label}
      </button>
    </Link>
  );
};

export default LinkButton;
