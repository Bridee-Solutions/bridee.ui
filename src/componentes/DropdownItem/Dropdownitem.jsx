import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Dropdownitem.module.css";
import { faChevronRight  } from "@fortawesome/free-solid-svg-icons";


function DropdownItem({ item, onClick }) {
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
