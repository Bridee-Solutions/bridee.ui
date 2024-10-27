import { useEffect, useRef } from 'react';
import styles from './Banner.module.css';
import SearchBar from '../SearchBar/SearchBar';

function Banner({ titulo, subtitulo, imagem }) {

  const divImage = useRef();
  
  useEffect(() => {
    divImage.current.style.backgroundImage = `url(${imagem})`;
    divImage.current.style.backgroundSize = 'cover'; 
    divImage.current.style.width = '100%'; 
    divImage.current.style.backgroundPosition = 'center'; 
  }, [imagem]);

  return (
    <div ref={divImage} className={styles.banner}>
      <h1>{titulo}</h1>
      <p className={styles.subtitle}>{subtitulo}</p>
      <SearchBar
          placeholder="Pesquisar por nome do assessor"
        />
    </div>
  );
}

export default Banner;
