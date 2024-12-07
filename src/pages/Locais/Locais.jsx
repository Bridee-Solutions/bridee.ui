import styles from "./Locais.module.css";
import Banner from "../../componentes/Banner/Banner";
import imagem from "../../assets/Banner/bannerLocais.svg";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import Navbar from "../../componentes/Navbar/Navbar";
import praia from "../../assets/locais/praia.svg";
import arlivre from "../../assets/locais/arlivre.svg";
import castelo from "../../assets/locais/castelo.svg";
import hotel from "../../assets/locais/hotel.svg";
import industria from "../../assets/locais/industria.svg";
import igreja from "../../assets/locais/igreja.svg";
import salao from "../../assets/locais/salaãoDeFestas.svg";
import sitio from "../../assets/locais/sitio.svg";

import React, { useState, useEffect } from "react";

import DetalhesPerfil from "../../componentes/DetalhesPerfil/DetalhesPerfil.jsx";

import CategoriaNavegacao from "../../componentes/CategoriaNavegacao/CategoriaNavegacao.jsx";
import { dadosLocais } from "../../componentes/mocks/mockData";
import CategoriaCards from "../../componentes/CategoriaCards/CategoriaCards.jsx";
import { request } from "../../config/axios/axios.js";

function Locais() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    request.getSubcategoriasByNome("locais").then((response) => {
      response.data.content.forEach(content => {
        content.imagemUrl = defineLocalImage(content.nome)
      })
      setCardsData(response.data)
      console.log(response.data);
      
    })
  }, []);

  const handleCategoryClick = async (categoria) => {
    console.log("Categoria selecionada:", categoria);
    const fornecedores = await request.getFornecedores(`${categoria.id}`)
    console.log(fornecedores);
    
    setSelectedCategory(fornecedores.data);
    setPage(1);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

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

  const defineLocalImage = (nomeSubcategoria) => {    
    const categoria = categorias.filter(categoria => categoria.nome == nomeSubcategoria)[0];
    if(categoria != undefined){
      const imagem = categoria.imagem;
      console.log(imagem);
      
      return imagem;
    }
  }

  return (
    <div className={styles.containerPai}>
      <Navbar />
      {!selectedCard && (
        <Banner
          imageUrl={imagem}
          title="Encontre os melhores locais para seu casamento"
          subtitle="Descubra e selecione espaços deslumbrantes que atendem ao seu estilo e orçamento, garantindo o cenário perfeito para o seu grande dia."
        >
          <div className={styles.searchbar}>
            <SearchBar />
          </div>
        </Banner>
      )}

      <div className={styles.container}>
        {!selectedCard ? (
          !selectedCategory ? (
            <CategoriaNavegacao
              categorias={cardsData}
              onSelectCategory={handleCategoryClick}
              tipo="locais" 
            />
          ) : (
            <CategoriaCards
              cards={selectedCategory}
              onCardClick={setSelectedCard}
              onBack={() => setSelectedCategory(null)}
              totalPages={selectedCategory}
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

export default Locais;
