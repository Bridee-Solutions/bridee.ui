import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import imagem from "../../assets/Banner/bannerFornecedores.svg";
import stylesAll from "../Locais/Locais.module.css";
import DetalhesPerfil from "../../componentes/DetalhesPerfil/DetalhesPerfil.jsx";

import CategoriaNavegacao from "../../componentes/CategoriaNavegacao/CategoriaNavegacao.jsx";
import CategoriaCards from "../../componentes/CategoriaCards/CategoriaCards.jsx";
import { request } from "../../config/axios/axios.js";

function Fornecedores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isSubcategoria, setIsSubcategoria] = useState(false);

  useEffect(() => {
    request.getCategorias().then(response => {
      setCardsData(response.data);
    })
  }, []);

  const handleCategoryClick = async (categoria) => {
    let subcategorias
    try{
      subcategorias = await request.getSubcategorias(categoria.id)
    }finally{

        if(!isSubcategoria && subcategorias.data.content.length > 1){
          setCardsData(subcategorias.data)
          setIsSubcategoria(true)
          return;
        }
      
        setSelectedCategory(categoria);
        
        request.getFornecedores(categoria.id).then(response => {
          setFilteredCards(response.data);
        })
        setPage(1);
    }
    
  };

  const returnToCategories = () => {
    setIsSubcategoria(false)
    request.getCategorias().then(response => {
      setCardsData(response.data);
      
    })
  }

  const fetchFornecedorDetails = async (card) => {
    const fornecedorDetails = await request.getFornecedoresInformation(card.id)
    
    setSelectedCard(fornecedorDetails.data)
    
  }

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
              categorias={cardsData}
              onSelectCategory={handleCategoryClick}
              tipo="fornecedores" 
              isSubcategoria={isSubcategoria}
              returnToCategories={returnToCategories}
            />
          ) : (
            <CategoriaCards
              cards={filteredCards}
              onCardClick={fetchFornecedorDetails}
              onBack={() => setSelectedCategory(null)}
              totalPages={cardsData.page.totalPages}
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
