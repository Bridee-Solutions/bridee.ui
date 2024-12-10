import React, { useState } from "react";
import styles from "./Contato.module.css";
import LinkButton from "../LinkButton/LinkButton";
import ImageUploader from "../ImageUploader/ImageUploader";

const Contato = ({ formData, setFormData, mainImage, setMainImage, additionalImages, setAdditionalImages, handleSubmit }) => {

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((item) => item !== value)
        : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <div className={styles.containerOpcao}>
        <div className={styles.containerNc}>
          <span>Qual é o seu e-mail comercial?</span>         
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
        
        </div>
      </div>
      <div className={styles.containerOpcao}>
        <div className={styles.containerNc}>
          <span>Qual é o URL do seu site?</span>
          <input
            type="text"
            name="urlSite"
            value={formData.urlSite}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.containerOpcao}>
        <div className={styles.containerNc}>
          <span>Qual o bairro?</span>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      
          <ImageUploader 
            mainImage={mainImage} 
            setMainImage={setMainImage} 
            additionalImages={additionalImages} 
            setAdditionalImages={setAdditionalImages}
          />
      

      <div className={styles.containerBotao}>
        <LinkButton label="Salvar" onClick={handleSubmit}/>
      </div>
    </form>
  );
};

export default Contato;
