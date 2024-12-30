import React, { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styles from "./ImageGallery.module.css"; 
import 'react-photo-view/dist/react-photo-view.css';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0 || images == null) {
    return <div>Sem imagens disponíveis</div>; 
  }

  useEffect(() => {
    console.log(images);
    
  }, [])

  return (
    <PhotoProvider>
      <div className={styles.container}>
        {images[0] && (
          <div className={styles.singleImage}>
            <PhotoView src={`data:image/**;base64,${images[0]}`}>
              <img src={`data:image/**;base64,${images[0]}`} alt={images[0].title || 'Image'} className={styles.imageOne} />
            </PhotoView>
          </div>
        )}

        {images.length > 1 && (
          <div className={styles.twoImages}>
            {images.slice(1, 3).map((image, index) => (
              image && (
                <PhotoView key={index} src={`data:image/**;base64,${image}`}>
                  <img src={`data:image/**;base64,${image}`} alt={image.title || 'Image'} className={styles.imageTwo} />
                </PhotoView>
              )
            ))}
          </div>
        )}

        {images[3] && (
          <div className={styles.singleImageTwo}>
            <PhotoView src={`data:image/**;base64,${images[3]}`}>
              <img src={`data:image/**;base64,${images[3]}`} alt={images[3].title || 'Image'} className={styles.imageThree} />
            </PhotoView>
          </div>
        )}
      </div>
    </PhotoProvider>
  );
};


export default ImageGallery;
