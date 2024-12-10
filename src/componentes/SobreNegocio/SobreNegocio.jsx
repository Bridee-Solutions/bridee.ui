import React, { useState } from "react";
import styles from "./SobreNegocio.module.css";
import LinkButton from "../LinkButton/LinkButton";

const SobreNegocio = ({ formData, setFormData, handleSubmit}) => {

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
    <div className={styles.colunaDireita}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        {/* Nome Comercial */}
        <div className={styles.containerOpcao}>
          <div className={styles.vs}>
            <span>Nome comercial:</span>
            <input
              name="nomeComercial"
              value={formData.nomeComercial}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.containerOpcao}>
          <div className={styles.vs}>
            <span>Visão geral do negócio:</span>
            <textarea
              name="visaoGeral"
              value={formData.visaoGeral}
              onChange={handleChange}
              className={styles.inputvs}
            />
          </div>
        </div>
        <div className={styles.containerOpcao}>
          <div className={styles.vs}>
            <span>Serviços oferecidos:</span>
            <textarea
              type="text"
              name="servicosOferecidos"
              value={formData.servicosOferecidos}
              onChange={handleChange}
              className={styles.inputvs}
            />
          </div>
        </div>
        <div className={styles.containerOpcao}>
          <div className={styles.vs}>
            <span>Descreva resumidamente a sua forma de trabalho:</span>
            <textarea
              type="text"
              name="formaDeTrabalho"
              value={formData.formaDeTrabalho}
              onChange={handleChange}
              className={styles.inputvs}
            />
          </div>
        </div>

        <div className={styles.containerRadio}>
          <div className={styles.opcoesRadio}>
            <span className={styles.pergunta}>Tamanhos de Casamento:</span>
            <div className={styles.opcoes}>
              {[
                "Com menos de 100 convidados",
                "Entre 100 e 300 convidados",
                "Entre 300 e 500 convidados",
                "Mais de 500 convidados",
              ].map((opcao) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="tamanhoCasamento"
                    value={opcao}
                    onChange={handleChange}
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.containerRadio}>
          <div className={styles.opcoesRadio}>
            <span className={styles.pergunta}>Que tipo de cerimônia organiza?</span>
            <div className={styles.opcoeswrap}>
              {[
                "Ao ar livre",
                "Simbólica",
                "Ecológica",
                "Civil",
                "No exterior",
                "Temática",
                "Religiosa",
              ].map((opcao, index) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="tipoCerimonia"
                    value={index + 1}
                    onChange={handleChange}
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
          </div>
        <div className={styles.containerRadio}>
          <div className={styles.opcoesRadio}>
            <span>Organiza casamentos não religiosos?</span>
            <div className={styles.opcoes}>
              <label>
                <input
                  type="radio"
                  name="naoReligioso"
                  value={true}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="naoReligioso"
                  value={false}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
          </div>
        </div>

        <div className={styles.containerRadio}>
          <div className={styles.opcoesRadio}>
            <span className={styles.pergunta}>Em que estilo de casamentos está especializado?</span>
            <div className={styles.opcoeswrap}>
              {[
                "Católico",
                "Budista",
                "Espírita",
                "Americano",
              ].map((opcao, index) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="tipoCasamentos"
                    value={index + 1}
                    onChange={handleChange}
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.containerRadio}>
          <div className={styles.opcoesRadio}>
            <span className={styles.pergunta}>Formas de pagamento:</span>
            <div className={styles.opcoeswrap}>
              {[
                "Cartão de crédito",
                "Cheque",
                "Dinheiro",
                "Cartão de débito",
                "Pix",
              ].map((opcao, index) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="formasPagamento"
                    value={index + 1}
                    onChange={handleChange}
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.containerBotao}>
          <LinkButton label="Salvar" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
};

export default SobreNegocio;
