import React from "react";
import styles from "../Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faXmark);

function ModalHeader({ children, onClose  }) {
  return (
    <div className={styles.modal_header}>
      <div className={styles.containerSuperior}>
        <div className={styles.container_close}>
          <button className={styles.modal_close} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} className={styles.iconClose} />
          </button>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <div className={styles.modal_titulo}>{children}</div>
      </div>
    </div>
  );
}

export default ModalHeader;
