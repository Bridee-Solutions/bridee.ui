import React from 'react';
import styles from '../css/Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faXmark)


function ModalHeader({ children }) {

    return (
        <div className={styles.modal_header}>
            <button className={styles.modal_close}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
                {children}
        </div>
    );

}

export default ModalHeader 