import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styles from "./ImageGallery.module.css"; 
import 'react-photo-view/dist/react-photo-view.css';


const ImageGallery = ({ images }) => {
  return (
    <PhotoProvider>
      <div className={styles.container}>
        {images.map((image, index) => (
          <PhotoView key={index} src={image.url}>
            <img
              src={image.url}
              alt={image.title}
              className={styles.image}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ImageGallery;
