import React from "react";
import styles from "./LocaisCategorias.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/LandingPage/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import praia from "../../assets/praia.png";
import industriais from "../../assets/industria.png";
import eventos from "../../assets/salaãoDeFestas.png";
import castelo from "../../assets/castelinho.png";
import arlivre from "../../assets/aoar.png";
import hotels from "../../assets/hotel.png";
import sits from "../../assets/sitio.png";
import igrejas from "../../assets/igreja.png";
import banner from "../../assets/bannerLocais.png"



const LocaisCategorias = () => {
    const categorias = [
        { title: 'Praia', imageUrl: praia },
        { title: 'Espaços Industriais', imageUrl: industriais},
        { title: 'Espaços de Eventos', imageUrl: eventos},
        { title: 'Castelo', imageUrl: castelo },
        { title: 'Ar Livre', imageUrl: arlivre },
        { title: 'Hotéis', imageUrl: hotels },
        { title: 'Sítios', imageUrl: sits },
        { title: 'Igrejas', imageUrl: igrejas},
     ];
    
      return (
        <div>
          <Navbar />
          <div className={styles["box"]}>
            <div className={styles["rectangle"]}></div>
            <Banner
              titulo="Encontre os melhores locais para seu casamento"
              subtitulo="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais, tudo para um dia verdadeiramente memorável."
              imagem={banner}
            />
            <div className={styles.searchBarContainer}>
              <SearchBar placeholder="Pesquisar por local" />
            </div>
          </div>
          <div className={styles.categorias}>
            <h2>Navegar por estilo</h2>
            <p>Encontre o cenário perfeito para o seu grande dia! Explore nossas categorias e descubra o espaço que combina com o seu sonho de casamento!</p>
            <div className={styles.grid}>
              {categorias.map((categoria, index) => (
                <Card
                  key={index}
                  title={categoria.title}
                  description="Descubra os melhores"
                  imageUrl={categoria.imageUrl}
                />
              ))}
            </div>
          </div>
          <Baseboard />
        </div>
      );
    };
export default LocaisCategorias;