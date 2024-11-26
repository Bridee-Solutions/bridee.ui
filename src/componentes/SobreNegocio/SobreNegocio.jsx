import React, { useState } from "react";
import styles from "./SobreNegocio.module.css";
import LinkButton from "../LinkButton/LinkButton";

const SobreNegocio = () => {
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
    <div className={styles.colunaDireita}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        {/* Nome Comercial */}
        <div className={styles.containerOpcao}>
          <div className={styles.containerNc}>
            <span>Nome comercial:</span>
            <input
              type="text"
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
              type="text"
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
              name="servicos"
              value={formData.servicos}
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
              name="descricao"
              value={formData.descricao}
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
                    name="tamanhosTrabalhados"
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
                "Religiosa",
                "Civil",
                "Ao ar livre",
                "No exterior",
                "Simbólica",
                "Temática",
                "Ecológica",
              ].map((opcao) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="formasPagamento"
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
            <span>Organiza casamentos não religiosos?</span>
            <div className={styles.opcoes}>
              <label>
                <input
                  type="radio"
                  name="organizaReligiosos"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="organizaReligiosos"
                  value="Não"
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
                "Americano",
                "Católico",
                "Budista",
                "Espírita"
              ].map((opcao) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="formasPagamento"
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
            <span className={styles.pergunta}>Formas de pagamento:</span>
            <div className={styles.opcoeswrap}>
              {[
                "Cartão de crédito",
                "Cheque",
                "Dinheiro",
                "Cartão de débito",
                "Pix",
              ].map((opcao) => (
                <label key={opcao} className={styles.label}>
                  <input
                    type="checkbox"
                    name="formasPagamento"
                    value={opcao}
                    onChange={handleChange}
                  />
                  {opcao}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.containerBotao}>
          <LinkButton label="Salvar" />
        </div>
      </form>
    </div>
  );
};

export default SobreNegocio;
