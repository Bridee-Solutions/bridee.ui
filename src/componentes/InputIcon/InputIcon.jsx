import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InputIcon.module.css';
import styles from './InputIcon.module.css';

const InputIcon = ({ icon, placeholder, type }) => (
  <div className={styles.inputWithIcon}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <input type={type} placeholder={placeholder} className={styles.input} />
  </div>
);

export default InputIcon;
