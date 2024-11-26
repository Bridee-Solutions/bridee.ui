import React, { useState } from "react";
import styles from "./ImageUploader.module.css";
import contato from "../Contato/Contato.module.css";

const ImageUploader = () => {
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([
    null,
    null,
    null,
    null,
  ]);

  // Função para carregar a imagem principal
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  // Função para carregar imagens adicionais
  const handleAdditionalImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...additionalImages];
      newImages[index] = URL.createObjectURL(file);
      setAdditionalImages(newImages);
    }
  };

  return (
    <div className={styles.uploaderContainer}>
      <div className={styles.containerOpcao}>
        <div className={styles.regula}>
          <div className={styles.containerNc}>
            <span>Carregar uma imagem de perfil principal</span>
          </div>
          <div className={styles.containerimage}>
            <label className={styles.uploadBox}>
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Imagem Principal"
                  className={styles.previewImage}
                />
              ) : (
                <>
                  <span className={styles.titulogrnd}>Selecione o arquivo aqui</span>
                  <span className={styles.legendagrnd}>Arquivos suportados: PNG, JPEG</span>
                </>
              )}
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleMainImageUpload}
                className={styles.fileInput}
              />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.containerOpcao}>
        <div className={styles.regula}>
          <div className={styles.containerImages4}>
            <span>
              Carregue imagens adicionais para destacar no seu perfil.
              <div className={styles.sub}> Selecione no máximo 04 arquivos.</div>
            </span>
          </div>
          <div className={styles.additionalImagesContainer}>
              {additionalImages.map((image, index) => (
                <label key={index} className={styles.uploadBoxSmall}>
                  {image ? (
                    <img
                      src={image}
                      alt={`Imagem Adicional ${index + 1}`}
                      className={styles.previewImageSmall}
                    />
                  ) : (
                    <>
                      <span className={styles.arquivo}>Selecione o arquivo aqui</span>
                      <span className={styles.legenda}>Arquivos suportados: PNG, JPEG</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleAdditionalImageUpload(index, e)}
                    className={styles.fileInput}
                  />
                </label>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
