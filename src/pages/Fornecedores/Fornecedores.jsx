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
import stylesAssessor from "../Assessores/Assessores.module.css";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";
import FAQSection from "../../componentes/FAQSection/Faq.jsx";
import OrcamentoCard from "../../componentes/OrcamentoCard/OrcamentoCard.jsx";
import ImageGallery from "../../componentes/ImageGallery/ImageGallery.jsx";

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

import imagemTeste from "../../assets/mockImages/image2.png";
import imagemTeste2 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste3 from "../../assets/mockImages/imagemcinco.jpg";
import imagemTeste4 from "../../assets/mockImages/imagemcinco.jpg";

function Fornecedores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          categoria: "Fotógrafo",
          images: [
            { url: imagemTeste, titulo: "Foto em Cerimônia" },
            { url: imagemTeste2, titulo: "Foto no Jardim" },
            { url: imagemTeste2, titulo: "Sessão Pré-casamento" },
            { url: imagemTeste2, titulo: "Foto na Recepção" },
          ],
          imagemPrincipal: imagemTeste,
          cidade: "São Paulo",
          bairro: "Jardins",
          nome: "Studio Luz e Amor Fotografia",
          website: "https://www.luzeamor.com.br/",
          descricaoFornecedor:
            "Com um olhar artístico e sensível, a equipe do Studio Luz e Amor captura os momentos mais especiais e autênticos de cada casamento, proporcionando memórias eternas.",
          informacoesGerais: [
            `Seu casamento será um dia cheio de momentos que irá querer guardar e relembrar. Uma recordação em papel ou um vídeo inconfundível de um dia que não se irá repetir, mas ficará para sempre. Faça com que as recordações mais especiais acompanhem você para toda a sua vida, e até depois, com Veiga Estudios! Retratos e filmagens que contam sua história de amor. A Veiga Estudios é uma empresa apaixonada e comprometida em transformar momentos em memórias eternas, utilizando a arte da fotografia e do vídeo para comunicar e encantar. Seguem em constante evolução, buscando sempre inovar e superar expectativas, fiéis à missão de inspirar, conectar e emocionar através das suas produções.` 
            ,
          ],
          perguntasFrequentes: [
            {
              pergunta: "Quais pacotes de fotografia vocês oferecem?",
              respostas: [
                "Pacote básico - Cerimônia e recepção",
                "Pacote completo - Cerimônia, recepção e sessão pré-casamento",
              ],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Vocês fazem fotos em outros estados?",
              respostas: ["Sim, mediante taxa adicional"],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Qual é o prazo para a entrega das fotos?",
              respostas: ["Até 45 dias após o evento"],
            },
            {
              pergunta: "Vocês oferecem serviços de vídeo?",
              respostas: ["Sim, em parceria com videógrafos"],
            },
          ],
        },
        {
          categoria: "Buffet & Gastronomia",
          images: [
            { url: imagemTeste, titulo: "Mesa de Buffet" },
            { url: imagemTeste, titulo: "Prato Principal" },
            { url: imagemTeste, titulo: "Mesa de Sobremesas" },
            { url: imagemTeste, titulo: "Canapés" },
          ],
          imagemPrincipal: imagemTeste4,
          cidade: "Rio de Janeiro",
          bairro: "Copacabana",
          nome: "Buffet Sabores do Mar",
          website: "https://www.saboresdomar.com/",
          descricaoFornecedor:
            "Com uma culinária inovadora e ingredientes frescos, o Buffet Sabores do Mar traz uma experiência gastronômica única para seu casamento, combinando pratos tradicionais e toques contemporâneos.",
          informacoesGerais: [
            "Buffet completo para eventos",
            "Cardápios personalizados",
            "Estação de frutos do mar e finger food",
            "Atende até 300 convidados",
          ],
          perguntasFrequentes: [
            {
              pergunta: "Quais tipos de menu são oferecidos?",
              respostas: [
                "Tradicional brasileiro",
                "Mediterrâneo",
                "Vegetariano e vegano",
              ],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Vocês oferecem degustação antes do casamento?",
              respostas: ["Sim, mediante agendamento"],
              mostrarIconeCheck: true,
            },
            {
              pergunta: "Vocês fornecem bebidas alcoólicas?",
              respostas: [
                "Não, mas temos parceria com fornecedores especializados",
              ],
            },
            {
              pergunta: "Qual é a capacidade máxima de atendimento?",
              respostas: ["Até 300 convidados"],
            },
          ],
        },
      ];
      setCardsData(data);
    };

    fetchData();
  }, []);



  const handleBack = () => {
    setSelectedCard(null);
  };
  
  const handleSolicitarOrcamento = (fornecedor) => {
    setSelectedCard(fornecedor);
  };
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
          <>
            {/* Navegação por categoria */}
            {!selectedCategory ? (
              <div className={stylesAll.navegarCategoria}>
                <div className={stylesAll.containerTitulo}>
                  <div className={stylesAll.titulo}>
                    <span>Navegar por categoria</span>
                  </div>
                  <div className={stylesAll.subtitulo}>
                    <span>
                      Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
                      ipsumLorem ipsumLorem ipsumLorem ipsum
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
                        onClick={() => handleCategoryClick(categoria.nome)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Lista de fornecedores da categoria selecionada
              <div className={stylesAll.pagina}>
                <div className={stylesAll.containerOpcoes}>
                  <div
                    onClick={() => setSelectedCategory(null)}
                    className={stylesAll.setaVolta}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />{" "}
                    <span className={stylesAll.voltar}>VOLTAR</span>
                  </div>
                  <div className={stylesAll.cardContainer}>
                    <div className={stylesAll.cadaCard}>
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
              <div className={stylesAssessor.containerVoltar}>
                <div onClick={handleBack} className={stylesAssessor.voltar}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={stylesAssessor.iconvolt}
                  />
                  <span>VOLTAR </span>
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

      {/* Paginação */}
      <div
        className={`${stylesAll.paginacaoContainer} ${
          !selectedCategory ? stylesAll.hidden : ""
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

export default Fornecedores;
