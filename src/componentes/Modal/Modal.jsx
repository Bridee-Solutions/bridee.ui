import React from 'react';
import styles from '../css/Modal.module.css';

function Modal({ children }) {


    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    );

}

export default Modal 