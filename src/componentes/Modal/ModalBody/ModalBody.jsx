import React from 'react';
import styles from '../Modal.module.css';

function ModalBody({ children }) {
  return (
    <div className={styles.modal_body}>
      <div className={styles.container_body}>{children}</div>
    </div>
  );
}

export default ModalBody;
