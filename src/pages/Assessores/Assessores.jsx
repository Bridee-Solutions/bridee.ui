import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Assessores.module.css";
import stylesAll from "../../pages/Locais/Locais.module.css";

import imagem from "../../assets/Banner/assessorbanner.svg";

import DetalhesPerfil from "../../componentes/DetalhesPerfil/DetalhesPerfil.jsx";
import CategoriaCards from "../../componentes/CategoriaCards/CategoriaCards.jsx";
import { dataAssessor } from "../../componentes/mocks/mockData";
import { request } from "../../config/axios/axios.js";

function Assessores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAssessor, setShowAssessor] = useState(false);

  const [totalCards, setTotalCards] = useState(0);
  // const totalPages = Math.ceil(totalCards / cardsPerPage);

  // função para mudar a página
  const handleChange = (event, value) => {
    request.getAssessoresDetails(Number(value) - 1).then(response => {
      console.log(response);
      setCardsData(response.data)
      setPage(response.data.page)
      setTotalCards(response.data.page.size)
    })
  };

  // Função de voltar
  const handleBack = () => {
    setShowAssessor(false); // volta para a visualização de cards
    setSelectedCard(null); // limpa o card selecionado
  };

  const fetchAssessorDetails = async (card) => {
    const assessorDetails = await request.getAssessorInformation(card.id)
    setShowAssessor(true)
    setSelectedCard(assessorDetails.data)  
  }

  useEffect(() => {
      request.getAssessoresDetails().then(response => {
        console.log(response);
        setCardsData(response.data)
        setPage(response.data.page)
        setTotalCards(response.data.page.size)
      })
  }, [])

  return (
    <div className={stylesAll.containerPai}>

      <Navbar />
      {!showAssessor && (
        <>
          <Banner
            imageUrl={imagem}
            title="Encontre os melhores assessores para seu casamento"
            subtitle="Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito."
          >
            <div className={stylesAll.searchbar}>
              <SearchBar />
            </div>
          </Banner>

          <div className={stylesAll.container}>
            <div className={styles.navegar}>
              <CategoriaCards
                cards={cardsData} // mostra os cards da página atual
                onCardClick={fetchAssessorDetails} // passa a função para selecionar o card
                totalPages={page.totalPages} // total de páginas para a navegação (paginacao)
                onPageChange={handleChange} // função de mudança de página
              />
            </div>
          </div>
        </>
      )}

      {showAssessor && selectedCard && (
        <DetalhesPerfil
          selectedCard={selectedCard} // passando o card selecionado
          handleBack={handleBack} // passando a função de voltar
          cardsData={cardsData} // passando para o componente DetalhesPerfil os dados dos cards
        />
      )}
      <Baseboard />
    </div>
  );
}

export default Assessores;
