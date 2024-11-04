import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DropdownItem.module.css";
import { faChevronRight  } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function DropdownItem({ item, onClick }) {
  const navigate = useNavigate(); 

  const handleItemClick = () => {
    onClick(item.nome);
    if (item.rota) {
      navigate(item.rota); 
    }
  };

  return (
    <div className={styles.dropdownItem} onClick={() => onClick(item.nome)}>
      <div className={styles.containerDropdown}>
        <FontAwesomeIcon icon={item.icon} className={styles.icon} />
        <span className={styles.item_nome}>{item.nome}
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon_arrow} />
        </span>
      </div>
      <p>{item.descricao}</p>
    </div>
  );
}

export default DropdownItem;
