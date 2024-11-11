import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Pagination from "@mui/material/Pagination";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import styles from "./Assessores.module.css";
import stylesAll from "../../pages/Locais/Locais.module.css";
import ImageGallery from "../../componentes/ImageGallery/ImageGallery.jsx";
import FAQSection from "../../componentes/FAQSection/Faq.jsx";
import LinkButton from "../../componentes/LinkButton/LinkButton";
import InputIcon from "../../componentes/InputIcon/InputIcon";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faUsers,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imagem from "../../assets/Banner/assessorbanner.svg";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";

import imagemTeste from "../../assets/mockImages/image2.png";
import imagemTeste2 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste3 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste4 from "../../assets/mockImages/imagemcinco.jpg";
import OrcamentoCard from "../../componentes/OrcamentoCard/OrcamentoCard.jsx";

function Assessores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAssessor, setShowAssessor] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          images: [
            { url: imagemTeste, title: "Imagem 1" },
            { url: imagemTeste2, title: "Imagem 2" },
            { url: imagemTeste3, title: "Imagem 3" },
            { url: imagemTeste4, title: "Imagem 3" },
          ],
          imagemPrincipal: image1,
          cidade: "São Paulo",
          bairro: "Vila Mariana",
          nome: "Agda Paula Assessoria & Cerimonial",
          website: "https://www.agdapaula.com.br/",
          descricaoAssessor:
            "Cada evento tratado como único e com a merecida e desejada atenção. Esta é a fórmula aplicada pela Agda Paula Assessoria & Cerimonial em cada casamento realizado e que vem colhendo bons frutos. Alinhando o carinho ao projeto dos noivos, esta profissional e equipe vem contribuindo para o sucesso do grande dia.",
          servicos: [
            "Os serviços abrangem consultoria para casamentos e assessoria completa. Não atuamos com assessoria do dia. As ações são desenvolvidas e coordenadas com criatividade, profissionalismo e eficácia. O atendimento é feito de acordo com as necessidades e preferências do cliente.",
          ],
          formaTrabalho:
            "A empresa inicia a assessoria com meses de antecedência para evitar imprevistos e garantir a qualidade na prestação dos serviços. Com o apoio de uma equipe experiente e motivada, busca atender e satisfazer as expectativas dos públicos mais exigentes.",
          perguntasFrequentes: [
            {
              pergunta:
                "Quais são os tamanhos dos casamentos para os quais trabalha?",
              respostas: [
                "Com menos de 100 convidados",
                "Entre 100 e 300 convidados",
                "Entre 300 e 500 convidados",
                "Mais de 500 convidados",
              ],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Que tipo de cerimônia realiza?",
              respostas: ["Religiosa", "Civil", "Ao ar livre", "No exterior"],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Organiza casamentos de religiões não católicas?",
              respostas: ["Sim"],
            },
            {
              pergunta: "Em que tipo de casamentos está especializado?",
              respostas: [
                "Estilo americano, evangélico, espírita, católico e budista",
              ],
            },
            {
              pergunta: "Como é o seu estilo de trabalhar?",
              respostas: ["Organizado, planejado e pontual"],
            },
            {
              pergunta: "Quais são as formas de pagamento?",
              respostas: ["Dinheiro", "Cheque", "Depósito"],
            },
          ],
        },
        
      ];
      setCardsData(data);
    };

    fetchData();
  }, []);

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardsData.slice(startIndex, endIndex);

  const totalCards = cardsData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleCardClick = (card) => {
    console.log("Cartão clicado:", card.id);
    setSelectedCard(card);
    setShowAssessor(true);
  };

  const handleBack = () => {
    setShowAssessor(null);
  };

  return (
    <div>
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
            <div className={stylesAll.containerOpcoes}>
              <div className={stylesAll.cardContainer}>
                <div className={stylesAll.cadaCard}>
                  {currentCards.map((card, index) => (
                    <Card
                      key={index}
                      nome={card.nome}
                      bairro={card.bairro}
                      cidade={card.cidade}
                      descricao={card.descricaoAssessor}
                      imageUrl={card.imagemPrincipal}
                      onClick={() => handleCardClick(card)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={stylesAll.paginacaoContainer}>
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
          </div>
        </>
      )}

      {showAssessor && selectedCard && (
        <div className={styles.containerAssessor}>
          <div className={styles.containerConteudo}>
            <div className={styles.containerVoltar}>
              <div onClick={handleBack} className={styles.voltar}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className={styles.iconvolt}
                />
                <span>VOLTAR </span>
              </div>
            </div>
            <div className={styles.containerImagens}>
              <ImageGallery images={selectedCard?.images || []} />{" "}
            </div>

            <div className={styles.todoconteudo}>
              <div className={styles.esquerda}>             

                <div className={styles.containerApresent}>
                  {cardsData.length > 0 && (
                    <FAQSection assessor={cardsData[0]} selectedCard={selectedCard} />
                  )}
                </div>
              </div>
              <div className={styles.direita}>
                <div className={styles.regOrc}>
                  <OrcamentoCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Baseboard />
    </div>
  );
}

export default Assessores;
