import React from 'react';
import styles from '../css/Modal.module.css';

function ModalBody({ children }) {

    return (
        <div className={styles.modal_body}>
                {children}
        </div>
    );

}

export default ModalBody 