import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Locais.module.css";
import { Quadro } from "../../componentes/QuadrosPortifolio/Quadro";
import Banner from "../../componentes/LandingPage/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import bannerLocais from "../../assets/bannerLocais.png";
import estrela from "../../assets/estrela.svg";
import rancho from "../../assets/rancho.png";
import quiosque from "../../assets/quiosque.png";
import beach from "../../assets/beach.png";
import chez from "../../assets/chez.png";
import castelo from "../../assets/castelo.png";
import pordosol from "../../assets/pordosol.png";

const Locais = () => {
    const locais = [
        {
            title: "Rancho Aveiro",
            image: rancho,
            rating: "4,9",
            reviews: "50",
            location: "São Bernardo do Campo, SP",
            description: "Talismã é uma empresa planejadora, organizadora e executora de belas e emocionantes cerimônias de casamento."
        },
        {
            title: "Quiosque Biruta Grill",
            image: quiosque,
            rating: "4,9",
            reviews: "50",
            location: "São Caetano do Sul, SP",
            description: "Com uma atmosfera tropical, o Quiosque Biruta Grill é perfeito para casamentos à beira-mar com um toque especial."
        },
        {
            title: "Hee Beach House",
            image: beach,
            rating: "4,9",
            reviews: "90",
            location: "Frei Caneca, São Paulo",
            description: "O Hee Beach House oferece a combinação perfeita de sofisticação e vistas deslumbrantes para o mar."
        },
        {
            title: "Chez Bisutti Lake Paradise",
            image: chez,
            rating: "4,8",
            reviews: "70",
            location: "Vila Olímpia, São Paulo",
            description: "Um refúgio encantador, o Chez Bisutti é ideal para casamentos íntimos e memoráveis à beira de um lago."
        },
        {
            title: "Castelo de Monte Mor",
            image: castelo,
            rating: "4,9",
            reviews: "50",
            location: "Hortolândia, São Paulo",
            description: "Castelo de Monte Mor combina elegância e história, criando o ambiente perfeito para cerimônias inesquecíveis."
        },
        {
            title: "Pôr do Sol",
            image: pordosol,
            rating: "4,9",
            reviews: "90",
            location: "Várzea Paulista, São Paulo",
            description: "O Pôr do Sol proporciona vistas incríveis e um ambiente romântico para casamentos ao ar livre."
        }
    ];

    return (
        <>
            <Navbar />
            <div className={styles["box"]}>
                <div className={styles["rectangle"]}></div>
                <Banner
                    titulo="Encontre os melhores locais para seu casamento"
                    subtitulo="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais para um dia verdadeiramente memorável."
                    imagem={bannerLocais}
                />
                <div className={styles.searchBarContainer}>
                    <SearchBar placeholder="Pesquisar por nome do local" />
                </div>
            </div>

            <div className={styles.quadrosContainer}>
                <div className={styles.gridQuadros}>
                    {locais.map((local, index) => (
                        <Quadro
                            key={index}
                            title={local.title}
                            image={local.image}
                            rating={local.rating}
                            reviews={local.reviews}
                            location={local.location}
                            description={local.description}
                            estrela={estrela}
                        />
                    ))}
                </div>
            </div>

            <Baseboard />
        </>
    );
};

export default Locais;
