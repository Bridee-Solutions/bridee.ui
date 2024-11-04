import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Pagination from "@mui/material/Pagination";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import CardNavegacao from "../../componentes/PesquisaCategoria/CardNavegacao";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import imagem from "../../assets/Banner/bannerFornecedores.svg";
import stylesAll from "../Locais/Locais.module.css";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";

import decoracao from "../../assets/fornecedores/decoracao.png";
import entretenimento from "../../assets/fornecedores/entretenimento.png";
import buffet from "../../assets/fornecedores/buffetGastronomia.png";
import floristas from "../../assets/fornecedores/floristas.png";
import fotógrafos from "../../assets/fornecedores/fotógrafo.png";
import locais from "../../assets/fornecedores/locais.png";
import modabeleza from "../../assets/fornecedores/modabeleza.png";
import padeiro from "../../assets/fornecedores/padeiro.png";
import papelaria from "../../assets/fornecedores/papelaria.png";
import transporte from "../../assets/fornecedores/transporte.png";
import vestidos from "../../assets/fornecedores/vestidos.png";
import videografos from "../../assets/fornecedores/videografos.png";

function Fornecedores() {
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
          category: "Vestidos",
        },
        {
          title: "Castelo de Monte Mor",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image2,
          category: "Fotógrafos",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Fotógrafos",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Florista",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Decoração",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Decoração",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Papelaria",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Entretenimento",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Entretenimento",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Papelaria",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          category: "Papelaria",
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
    { nome: "Vestido", imagem: vestidos },
    { nome: "Fotógrafo", imagem: fotógrafos },
    { nome: "Floristas", imagem: floristas },
    { nome: "Buffet & Gastronomia", imagem: buffet },
    { nome: "Decoração", imagem: decoracao },
    { nome: "Locais", imagem: locais },
    { nome: "Transporte & Acomodação", imagem: transporte },
    { nome: "Padeiro de bolos & Sobremesas", imagem: padeiro },
    { nome: "Moda & Beleza", imagem: modabeleza },
    { nome: "Videógrafos", imagem: videografos },
    { nome: "Papelaria", imagem: papelaria },
    { nome: "Entretenimento", imagem: entretenimento },
  ];

  const handleCategoryClick = (categoria) => {
    console.log("Categoria selecionada:", categoria);
    setSelectedCategory(categoria);
    setPage(1);
  };

  const handleCardClick = (categoriaNome) => {
    console.log(`Redirecionando para a categoria: ${categoriaNome}`);
    handleCategoryClick(categoriaNome);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Navbar />
      <Banner
        imageUrl={imagem}
        title="Encontre os melhores fornecedores para seu casamento"
        subtitle="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais, tudo para um dia verdadeiramente memorável."
      >
        <div className={stylesAll.searchbar}>
          <SearchBar />
        </div>
      </Banner>
      <div className={stylesAll.container}>
      {!selectedCategory && (
          <div className={stylesAll.navegarCategoria}>
            <div className={stylesAll.containerTitulo}>
              <div className={stylesAll.titulo}>
                <span>Navegar por estilo</span>
              </div>
              <div className={stylesAll.subtitulo}>
                <span>
                  Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsum
                </span>
              </div>
            </div>

            <div className={stylesAll.containerCards}>
              <div className={stylesAll.cadaCardLocal}>
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
        <div className={stylesAll.pagina}>
          {selectedCategory && (
            <div className={stylesAll.containerOpcoes}>
              <div onClick={handleBack} className={stylesAll.setaVolta}>
                <FontAwesomeIcon icon={faArrowLeft} /> <span className={stylesAll.voltar}>VOLTAR</span>
              </div>
              <div className={stylesAll.cardContainer}>
                <div className={stylesAll.cadaCard}>
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

      <div className={`${stylesAll.paginacaoContainer} ${!selectedCategory ? stylesAll.hidden : ''}`}>
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

export default Fornecedores;
