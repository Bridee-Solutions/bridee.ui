import { useEffect, useRef } from 'react';
import styles from './Banner.module.css';

function Banner({ titulo, subtitulo, imagem }) {

  const divImage = useRef();
  
  useEffect(() => {
    divImage.current.style.backgroundImage = `url(${imagem})`;
    divImage.current.style.backgroundSize = 'cover'; 
    divImage.current.style.backgroundPosition = 'center'; 
  }, [imagem]);

  return (
    <div ref={divImage} className={styles.banner}>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Banner;
