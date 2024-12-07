import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InputIcon.module.css';
import styles from './InputIcon.module.css';
import InputMask from "react-input-mask"

const InputIcon = ({ icon, placeholder, type, defineInputValue }) => {

  return(
    <div className={styles.inputWithIcon}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {placeholder == "Telefone" ?
        <InputMask mask={"+55 (99) 99999-9999"} placeholder={placeholder}
        type={type} className={styles.input} onChange={(e) => defineInputValue(e.target.value)}>
        </InputMask>:
        <InputMask placeholder={placeholder}
        type={type} className={styles.input} onChange={(e) => defineInputValue(e.target.value)}>
        </InputMask>
      }
    </div>
  )
}

export default InputIcon;
