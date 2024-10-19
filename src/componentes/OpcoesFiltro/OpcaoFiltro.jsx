import React from "react";
import styles from './opcaoFiltro.module.css';
import "../../index.css"

const OpcaoFiltro = ({title, options}) =>{
    return (
        <div className={styles['checkbox-group']}>
        <h2>{title}</h2>
        {options.map((option, index) => (
            <div key={index} className="checkbox-option">
                <input type="checkbox" id={`${title}-${index}`} />
                <label htmlFor={`${title}-${index}`}>{option}</label>
            </div>
        ))}    
        </div>
    );
};

export default OpcaoFiltro;
