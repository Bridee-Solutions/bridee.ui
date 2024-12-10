import React, { useEffect, useState } from "react";

import styles from "./Configuracoes.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import Contato from "../../componentes/Contato/Contato";
import Footer from "../../componentes/LandingPage/Footer/Footer";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import SobreNegocio from "../../componentes/SobreNegocio/SobreNegocio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faUser } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../config/axios/axios";
const Configuracoes = () => {
  useEffect(() => {loadInfo()}, []);
  
  const [selectedMenu, setSelectedMenu] = useState("sobre");
  const [formData, setFormData] = useState({
    id: null,
    nomeComercial: "",
    email: "",
    urlSite: "",
    visaoGeral: "",
    servicosOferecidos: "",
    formaDeTrabalho: "",
    bairro: "",
    tamanhoCasamento: [],
    naoReligioso: false,
    tipoCerimonia: [],
    formasPagamento: [],
  });
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([null, null, null, null]);

  const loadInfo = () => {
    request.getInformacaoAssociado(9).then((data) => {
      console.log(data.data);
      console.log(formData);



    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const informacaoAssociado = new FormData();
    const nomeArquivos = ["imagemSecundaria", "imagemTerciaria", "imagemQuaternaria", "imagemQuinaria"];
    const { formasPagamento, tipoCasamentos, tipoCerimonia, id, ...formDataWithoutFields } = formData;
  
    const formDataWithTransformedFields = {
      ...formDataWithoutFields,
      tamanhoCasamento: formData.tamanhoCasamento.join(','),
      ...(id ? { id } : {})
    };

    let dataToSend = {
      informacaoAssociado: formDataWithTransformedFields,
      formasPagamento: formData.formasPagamento,
      tiposCerimonia: formData.tipoCerimonia,
      tiposCasamento: formData.tipoCasamentos
    };

    informacaoAssociado.append('json', JSON.stringify(dataToSend));
    
    if (mainImage) {
      informacaoAssociado.append('imagemPrincipal', mainImage);
    }

    additionalImages.forEach((arquivo, index) => {
      if (arquivo) {
        informacaoAssociado.append(nomeArquivos[index], arquivo);
      }
    });
    
    console.log(dataToSend);
    request.salvarInformacaoAssociado(9, informacaoAssociado).then((data) => {
      console.log("Foi");
    });
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "sobre":
        return <SobreNegocio setFormData={setFormData} formData={formData} handleSubmit={handleSubmit}/>;
      case "contato":
        return <Contato 
          setFormData={setFormData} 
          formData={formData} 
          mainImage={mainImage} 
          setMainImage={setMainImage}
          additionalImages={additionalImages}
          setAdditionalImages={setAdditionalImages}
          handleSubmit={handleSubmit}
        />;
      default:
        return <SobreNegocio setFormData={setFormData} formData={formData}/>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.tudo}>
        <div className={styles.centro}>
          <div className={styles.colunaEsquerda}>
            <div className={styles.containerTitulo}>
              <span>Minha conta</span>
            </div>
            <div className={styles.opcoesConta}>
              {/* Menu: Meu negócio */}
              <div
                className={`${styles.itemConta} ${
                  selectedMenu === "sobre" ? styles.active : ""
                }`}
                onClick={() => setSelectedMenu("sobre")}
              >
                <FontAwesomeIcon
                  icon={faHandshake}
                  className={styles.icone}
                  style={{ color: "#EB9B9A" }}
                />
                <span>Meu negócio</span>
              </div>

              {/* Menu: Contato */}
              <div
                className={`${styles.itemConta} ${
                  selectedMenu === "contato" ? styles.active : ""
                }`}
                onClick={() => setSelectedMenu("contato")}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles.icone}
                  style={{ color: "#EB9B9A" }}
                />
                <span>Contato</span>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
            <div className={styles.containerTituloDireita}>
              <div className={styles.titulo}>
                <span>
                  {selectedMenu === "sobre"
                    ? "Sobre o seu negócio"
                    : "Informações de contato"}
                </span>
              </div>
              <div className={styles.subtitulo}>
                <span>
                  {selectedMenu === "sobre"
                    ? "Essas informações aparecerão no seu perfil público para que os clientes conheçam melhor seu trabalho e suas especialidades."
                    : "Atualize suas informações de contato para manter a comunicação com seus clientes."}
                </span>
              </div>
            </div>
            <div className={styles.negocio}>{renderContent()}</div>
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
};

export default Configuracoes;
