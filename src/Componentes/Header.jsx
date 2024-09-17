import React from 'react';
import styles from '../css/Header.module.css'


function Header() {
  return (
    <header className = {styles.Header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9600642490050d671517648081bc097cfb811321c5077f7d767705bc28cd6a8e?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="Bridee header image" className={"styles.header-image"} />
      
    </header>
  );
}

export default Header;