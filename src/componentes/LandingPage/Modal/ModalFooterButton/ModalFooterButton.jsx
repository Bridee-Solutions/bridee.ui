import React from 'react';
import styles from '../css/Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

library.add(faWhatsapp, faPlus, faTrashCan)



function ModalFooterButton({ button, text }) {
    switch (button) {
        case "save_button":
            return (
                <button className={styles.save_button}>{text}</button>
            );
        case "delete_button":
            return (
                <button className={styles.delete_button}>
                    <FontAwesomeIcon icon={faTrashCan} size='lg' />
                    {text}
                </button>
            );
        case "cancel_button":
            return (
                <button className={styles.cancel_button}>{text}</button>
            );
        case "add_button":
            return (
                <button className={styles.add_button}>
                    <FontAwesomeIcon icon={faPlus} size='lg' />
                    {text}
                </button>
            );
        case "whatsapp_button":
            return (
                <button className={styles.whatsapp_button}>
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