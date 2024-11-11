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
import stylesAssessor from "../Assessores/Assessores.module.css";

import React, { useState, useEffect } from "react";
import CardNavegacao from "../../componentes/PesquisaCategoria/CardNavegacao";
import Pagination from "@mui/material/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import FAQSection from "../../componentes/FAQSection/Faq.jsx";
import OrcamentoCard from "../../componentes/OrcamentoCard/OrcamentoCard.jsx";
import ImageGallery from "../../componentes/ImageGallery/ImageGallery.jsx";

import imagemTeste from "../../assets/mockImages/image2.png";
import imagemTeste2 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste3 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste4 from "../../assets/mockImages/imagemcinco.jpg";

function Locais() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          categoria: "Praia",
          images: [
            { url: imagemTeste, titulo: "Cerimônia à beira-mar" },
            { url: imagemTeste2, titulo: "Pôr do sol na praia" },
            { url: imagemTeste2, titulo: "Casamento ao ar livre" },
            { url: imagemTeste2, titulo: "Decoração praiana" },
          ],
          imagemPrincipal: imagemTeste,
          cidade: "Rio de Janeiro",
          bairro: "Barra da Tijuca",
          nome: "Casamento Praia Encantada",
          website: "https://www.praiaencantada.com.br/",
          descricaoFornecedor:
            "Em um cenário único, o Casamento Praia Encantada transforma sua cerimônia em uma experiência mágica. O som das ondas e a brisa do mar criam o ambiente perfeito para um dia inesquecível. Nossa equipe especializada cuida de cada detalhe para garantir que seu grande dia seja perfeito, desde a decoração até o serviço de recepção.",
          informacoesGerais: [
            "Casamento à beira-mar com cerimônia e recepção na praia",
            "Decoração temática praiana, com detalhes em conchas e flores tropicais",
            "Serviços completos de catering e bartenders especializados",
            "Pacotes exclusivos para casamentos ao pôr do sol",
          ],
          perguntasFrequentes: [
            {
              pergunta:
                "É possível realizar o casamento em qualquer época do ano?",
              respostas: [
                "Sim, mas recomendamos o período entre abril e setembro para garantir uma melhor previsão climática.",
              ]
            },
            {
              pergunta: "Qual é o limite de convidados?",
              respostas: ["Capacidade para até 200 convidados"],
            },
            {
              pergunta: "Posso personalizar a decoração do casamento?",
              respostas: [
                "Sim, trabalhamos com decoração personalizada para cada estilo e tema.",
              ],
            },
            {
              pergunta:
                "Há opções de catering para convidados com restrições alimentares?",
              respostas: [
                "Sim, oferecemos opções vegetarianas, veganas e sem glúten.",
              ],
            },
          ],
        },
        {
          categoria: "Castelos",
          images: [
            { url: imagemTeste, titulo: "Casamento no salão nobre" },
            { url: imagemTeste2, titulo: "Jardins do castelo" },
            { url: imagemTeste2, titulo: "Vista panorâmica do castelo" },
            { url: imagemTeste2, titulo: "Banquete no salão de festas" },
          ],
          imagemPrincipal: imagemTeste3,
          cidade: "Campos do Jordão",
          bairro: "Centro",
          nome: "Castelo Encantado Eventos",
          website: "https://www.casteloencantado.com.br/",
          descricaoFornecedor:
            "O Castelo Encantado é o lugar perfeito para quem sonha com um casamento de conto de fadas. Com um ambiente histórico e uma arquitetura deslumbrante, este local é ideal para celebrar o amor de maneira elegante e grandiosa. Oferecemos um serviço completo para transformar sua cerimônia e festa em uma experiência inesquecível.",
          informacoesGerais: [
            "Castelo medieval com salão de festas e capela para cerimônias",
            "Jardins luxuriantes para recepções ao ar livre",
            "Opções de decoração clássica ou contemporânea",
            "Pacotes completos de casamento com serviços de buffet, música e fotografia",
          ],
          perguntasFrequentes: [
            {
              pergunta:
                "O castelo está disponível para casamentos durante todo o ano?",
              respostas: [
                "Sim, o castelo é disponível durante todo o ano, mas as reservas para os meses de alta temporada devem ser feitas com antecedência.",
              ]
            },
            {
              pergunta: "Qual é a capacidade do salão de festas?",
              respostas: ["O salão de festas acomoda até 300 convidados"],
            },
            {
              pergunta: "É possível realizar a cerimônia religiosa no castelo?",
              respostas: [
                "Sim, temos uma capela no castelo onde é possível realizar a cerimônia religiosa.",
              ],
            },
            {
              pergunta: "Há opções de música ao vivo?",
              respostas: [
                "Sim, trabalhamos com músicos especializados em casamentos e oferecemos diversas opções de repertório.",
              ],
            },
          ],
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
    ? cardsData.filter((card) => card.categoria === selectedCategory)
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
    console.log(" voltar clicado");
    setSelectedCard(null);
    setSelectedCategory(null);
  };
  const handleSolicitarOrcamento = (fornecedor) => {
    setSelectedCard(fornecedor);
  };

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
          <>
            {!selectedCategory ? (
              <div className={styles.navegarCategoria}>
                <div className={styles.containerTitulo}>
                  <div className={styles.titulo}>
                    <span>Navegar por estilo</span>
                  </div>
                  <div className={styles.subtitulo}>
                    <span>
                      Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
                      ipsumLorem ipsumLorem ipsumLorem ipsum
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
            ) : (
              <div className={styles.pagina}>
                <div className={styles.containerOpcoes}>
                  <div
                    onClick={() => setSelectedCategory(null)}
                    className={styles.setaVolta}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />{" "}
                    <span className={styles.voltar}>VOLTAR</span>
                  </div>
                  <div className={styles.cardContainer}>
                    <div className={styles.cadaCard}>
                      {displayedCards.map((card, index) => (
                        <Card
                          key={index}
                          nome={card.nome}
                          descricao={card.descricaoFornecedor}
                          imageUrl={card.imagemPrincipal}
                          bairro={card.bairro}
                          cidade={card.cidade}
                          onClick={() => handleSolicitarOrcamento(card)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={stylesAssessor.containerAssessor}>
            <div className={stylesAssessor.containerConteudo}>
              <div className={stylesAssessor.containerVoltar} >
              <div onClick={handleBack} className={stylesAssessor.voltar}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={stylesAssessor.iconvolt}
                  />
                  <span onClick={handleBack}>VOLTAR </span>
                </div>
              </div>
              <div className={stylesAssessor.containerImagens}>
                <ImageGallery images={selectedCard?.images || []} />{" "}
              </div>

              <div className={stylesAssessor.todoconteudo}>
                <div className={stylesAssessor.esquerda}>
                  <div className={stylesAssessor.containerApresent}>
                    {cardsData.length > 0 && (
                      <FAQSection
                        perfilGeral={cardsData[0]}
                        selectedCard={selectedCard}
                      />
                    )}
                  </div>
                </div>
                <div className={stylesAssessor.direita}>
                  <div className={stylesAssessor.regOrc}>
                    <OrcamentoCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`${styles.paginacaoContainer} ${
          !selectedCategory ? styles.hidden : ""
        }`}
      >
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
