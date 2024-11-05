import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styles from "./ImageGallery.module.css"; 
import 'react-photo-view/dist/react-photo-view.css';

const ImageGallery = ({ images }) => {
  return (
    <PhotoProvider>
      <div className={styles.container}>
        {/* Verifica se a primeira imagem existe */}
        {images[0] && (
          <div className={styles.singleImage}>
            <PhotoView src={images[0].url}>
              <img src={images[0].url} alt={images[0].title || 'Image'} className={styles.imageOne} />
            </PhotoView>
          </div>
        )}

        {/* Verifica se a segunda e a terceira imagens existem */}
        {images.length > 2 && (
          <div className={styles.twoImages}>
            {images.slice(1, 3).map((image, index) => (
              image && (
                <PhotoView key={index} src={image.url}>
                  <img src={image.url} alt={image.title || 'Image'} className={styles.imageTwo} />
                </PhotoView>
              )
            ))}
          </div>
        )}

        {/* Verifica se a quarta imagem existe */}
        {images[3] && (
          <div className={styles.singleImage}>
            <PhotoView src={images[3].url}>
              <img src={images[3].url} alt={images[3].title || 'Image'} className={styles.imageThree} />
            </PhotoView>
          </div>
        )}
      </div>
    </PhotoProvider>
  );
};

export default ImageGallery;
