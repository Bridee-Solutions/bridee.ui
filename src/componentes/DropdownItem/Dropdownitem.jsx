import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DropdownItem.module.css";

function DropdownItem({ item, onClick }) {
  return (
    <div className={styles.dropdownItem} onClick={() => onClick(item.nome)}>
      <div className={styles.containerDropdown}>
        <FontAwesomeIcon icon={item.icon} className={styles.icon} />
        <span className={styles.item_nome}>{item.nome}</span>
      </div>
      <p>{item.descricao}</p>
    </div>
  );
}

export default DropdownItem;
