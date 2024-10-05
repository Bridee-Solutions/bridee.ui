import React from 'react';
import styles from '../Modal.module.css';

function ModalFooter({ children }) {

    return (
        <div className={styles.modal_footer}>
                {children}
        </div>
    );

}

export default ModalFooter