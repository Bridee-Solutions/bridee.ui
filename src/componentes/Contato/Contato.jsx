import React, { useState } from "react";
import styles from "./Contato.module.css";
import LinkButton from "../LinkButton/LinkButton";
import ImageUploader from "../ImageUploader/ImageUploader";

const Contato = () => {
  const [formData, setFormData] = useState({
    nomeComercial: "",
    visaoGeral: "",
    servicos: "",
    descricao: "",
    tamanhosTrabalhados: [],
    organizaReligiosos: "",
    estilosCasamento: [],
    formasPagamento: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          [name]: checked
            ? [...(prev[name] || []), value]
            : prev[name].filter((item) => item !== value),
        };
      } else if (type === "radio") {
        return { ...prev, [name]: value };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <div className={styles.containerOpcao}>
        <div className={styles.containerNc}>
          <span>Qual é o seu e-mail comercial?</span>         
            <input
              type="text"
              name="emailComercial"
              value={formData.emailComercial}
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

      
          <ImageUploader />
      

      <div className={styles.containerBotao}>
        <LinkButton label="Salvar" />
      </div>
    </form>
  );
};

export default Contato;
