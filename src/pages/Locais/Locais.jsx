import styles from "./Locais.module.css";
import Banner from "../../componentes/Banner/Banner";
import imagem from "../../assets/Banner/bannerLocais.svg";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import Navbar from "../../componentes/Navbar/Navbar";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";
import praia from "../../assets/locais/praia.svg";
import arlivre from "../../assets/locais/arlivre.svg";
import castelo from "../../assets/locais/castelo.svg";
import hotel from "../../assets/locais/hotel.svg";
import industria from "../../assets/locais/industria.svg";
import igreja from "../../assets/locais/igreja.svg";
import salao from "../../assets/locais/salaãoDeFestas.svg";
import sitio from "../../assets/locais/sitio.svg";

import React, { useState, useEffect } from "react";
import CardNavegacao from "../../componentes/PesquisaCategoria/CardNavegacao";
import Pagination from "@mui/material/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { color } from "d3-color";

function Locais() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
          category: "Espaços de Eventos",
        },
        {
          title: "Teste de eventos",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento ? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image2,
          category: "Espaços de Eventos",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Castelos",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Castelos",
        },
        {
          title: "TESTE CASTELOS",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Castelos",
        },
        {
          title: "Teste de praia 1",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Praia",
        },
      ];
      setCardsData(data);
    };

    fetchData();
  }, []);

  const totalCards = cardsData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardsData.slice(startIndex, endIndex);

  const filteredCards = selectedCategory
    ? cardsData.filter((card) => card.category === selectedCategory)
    : [];
  const displayedCards = filteredCards.slice(startIndex, endIndex);

  const categorias = [
    { nome: "Praia", imagem: praia },
    { nome: "Espaços Industriais", imagem: industria },
    { nome: "Espaços de Eventos", imagem: salao },
    { nome: "Castelos", imagem: castelo },
    { nome: "Ar Livre", imagem: arlivre },
    { nome: "Hotéis", imagem: hotel },
    { nome: "Sítios", imagem: sitio },
    { nome: "Igrejas", imagem: igreja },
  ];

  const handleCategoryClick = (categoria) => {
    console.log("Categoria selecionada:", categoria);
    setSelectedCategory(categoria);
    setPage(1);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

 
  const handleCardClick = (categoriaNome) => {
    console.log(`Redirecionando para a categoria: ${categoriaNome}`);
    handleCategoryClick(categoriaNome); 
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className={styles.containerPai}>
      <Navbar />
      <Banner
        imageUrl={imagem}
        title="Encontre os melhores locais para seu casamento"
        subtitle="Descubra e selecione espaços deslumbrantes que atendem ao seu estilo e orçamento, garantindo o cenário perfeito para o seu grande dia."
      >
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
      </Banner>

      <div className={styles.container}>
        {!selectedCategory && (
          <div className={styles.navegarCategoria}>
            <div className={styles.containerTitulo}>
              <div className={styles.titulo}>
                <span>Navegar por estilo</span>
              </div>
              <div className={styles.subtitulo}>
                <span>
                  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsum
                </span>
              </div>
            </div>

            <div className={styles.containerCards}>
              <div className={styles.cadaCardLocal}>
                {categorias.map((categoria, index) => (
                  <CardNavegacao
                    key={index}
                    nome={categoria.nome}
                    imagem={categoria.imagem}
                    onClick={() => handleCardClick(categoria.nome)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={styles.pagina}>
          {selectedCategory && (
            <div className={styles.containerOpcoes}>
              <div onClick={handleBack} className={styles.setaVolta}>
                <FontAwesomeIcon icon={faArrowLeft} /> <span className={styles.voltar}>VOLTAR</span>
              </div>
              <div className={styles.cardContainer}>
                <div className={styles.cadaCard}>
                  {displayedCards.map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      description={card.description}
                      imageUrl={card.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`${styles.paginacaoContainer} ${!selectedCategory ? styles.hidden : ''}`}>
        {selectedCategory && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#DD7B78",
                color: "#FFFFFF",
              },
            }}
          />
        )}
      </div>
      <Baseboard />
    </div>
  );
}

export default Locais;
