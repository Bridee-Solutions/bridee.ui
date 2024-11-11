import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";

import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";

import imagem from "../../assets/Banner/bannerFornecedores.svg";
import stylesAll from "../Locais/Locais.module.css";


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
import DetalhesPerfil from "../../componentes/DetalhesPerfil/DetalhesPerfil.jsx";

import CategoriaNavegacao from "../../componentes/CategoriaNavegacao/CategoriaNavegacao.jsx";
import CategoriaCards from "../../componentes/CategoriaCards/CategoriaCards.jsx";
import { dadosFornecedores } from "../../componentes/mocks/mockData";

function Fornecedores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setCardsData(dadosFornecedores);
  }, []);


  const handleBack = () => {
    setSelectedCard(null);
  };
  
  const handleSolicitarOrcamento = (fornecedor) => {
    setSelectedCard(fornecedor);
  };
  const totalCards = cardsData.length;
  const totalPages = Math.ceil(
    (selectedCategory
      ? cardsData.filter((card) => card.categoria === selectedCategory).length
      : totalCards) / cardsPerPage
  );
    const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardsData.slice(startIndex, endIndex);

  const filteredCards = selectedCategory
    ? cardsData.filter((card) => card.categoria === selectedCategory)
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
    { nome: "Padeiro & Sobremesas", imagem: padeiro },
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


  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Navbar />
      {!selectedCard && (
        <Banner
          imageUrl={imagem}
          title="Encontre os melhores fornecedores para seu casamento"
          subtitle="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais, tudo para um dia verdadeiramente memorável."
        >
          <div className={stylesAll.searchbar}>
            <SearchBar />
          </div>
        </Banner>
      )}
      <div className={stylesAll.container}>
      {!selectedCard ? (
          !selectedCategory ? (
            <CategoriaNavegacao
              categorias={categorias}
              onSelectCategory={handleCategoryClick}
              tipo="fornecedores" 
            />
          ) : (
            <CategoriaCards
              cards={filteredCards}
              onCardClick={setSelectedCard}
              onBack={() => setSelectedCategory(null)}
              totalPages={totalPages}
              onPageChange={handleChange}
            />
          )
        ) : (
         <DetalhesPerfil
          selectedCard={selectedCard}
          handleBack={() => setSelectedCard(null)}
          cardsData={cardsData}
        />
        )}
      </div>
      <Baseboard />
    </div>
  );
}

export default Fornecedores;
