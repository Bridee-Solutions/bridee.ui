import React from 'react';
import styles from '../Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faWhatsapp, faPlus, faTrashCan)



function ModalFooterButton({ button, text, onClick }) {
    switch (button) {
        case "save_button":
            return (
                <button className={styles.save_button} onClick={onClick}>{text}</button>
            );
        case "delete_button":
            return (
                <button className={styles.delete_button} onClick={onClick}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    {text}
                </button>
            );
        case "cancel_button":
            return (
                <button className={styles.cancel_button} onClick={onClick}>{text}</button>
            );
        case "add_button":
            return (
                <button className={styles.add_button} onClick={onClick}>
                    <FontAwesomeIcon icon={faPlus} size='lg' />
                    <span>{text}</span>
                </button>
            );
        case "whatsapp_button":
            return (
                <button className={styles.whatsapp_button} onClick={onClick}>
                    <FontAwesomeIcon icon={faWhatsapp} size='lg' />
                    {text}
                </button>
            );
        default:
            return (
                <button>
                    Fora do Padrão
                </button>
            );

    }
}


export default ModalFooterButton