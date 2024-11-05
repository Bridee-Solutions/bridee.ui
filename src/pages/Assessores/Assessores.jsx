import styles from "./Assessores.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import stylesAll from "../Locais/Locais.module.css";
import Banner from "../../componentes/Banner/Banner.jsx";
import imagem from "../../assets/Banner/assessorbanner.svg";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card.jsx";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";
import React, { useState, useEffect } from "react";
import "react-photo-view/dist/react-photo-view.css";
import ImageGallery from "../../componentes/ImageGallery/ImageGallery.jsx";
import FAQSection from "../../componentes/FAQSection/Faq.jsx";
import LinkButton from "../../componentes/LinkButton/LinkButton";

function Assessores() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
          cidade: "São Paulo",
          category: "Praia",
        },

        {
          title: "Castelo de Monte Mor",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image2,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          cidade: "São Paulo",
          category: "Praia",
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
          cidade: "São Paulo",
          category: "Praia",
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

  const images = [
    {
      url: "https://scontent-gru2-2.xx.fbcdn.net/v/t51.75761-15/464204559_18466724368046718_8305253541620917575_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=a9Z0Ytkot4AQ7kNvgH7p60u&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=Ai6YVbT_QsypcHMaYIDeFaP&oh=00_AYC2IlSBa-lhExZXyv1TgY8JDmpXg1SdHdC7scsU1ey0zw&oe=673031B7",
      title: "Imagem 1",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUygEE7UR8Cr1FUnZq3dPOdKWGDC6_qg3vg&s",
      title: "Imagem 2",
    },
    { url: "https://via.placeholder.com/800", title: "Imagem 3" },
    {
      url: "https://avatars.githubusercontent.com/u/142367619?v=4",
      title: "Imagem 3",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* <Banner
        imageUrl={imagem}
        title="Encontre os melhores assessores para seu casamento"
        subtitle="Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito."
      >
        <div className={stylesAll.searchbar}>
          <SearchBar />
        </div>
      </Banner> */}

      <div className={styles.containerAssessor}>
        <div className={styles.containerConteudo}>
          <div className={styles.containerImagens}>
            <ImageGallery images={images} />
          </div>

          <div className={styles.todoconteudo}>
            <div className={styles.esquerda}>
              <div className={styles.containerTitulo}>
                <div className={styles.nome}>
                  <span>Agda Paula Assessoria</span>
                </div>
                <div className={styles.containerSubt}>
                  <div className={styles.subtitulo}>
                    <span>Moema, São Paulo</span>
                  </div>
                  <div className={styles.website}>
                    <span>Visitar website</span>
                  </div>
                </div>
              </div>

              <div className={styles.containerApresent}>
                <div>
                  <FAQSection />
                </div>
              </div>
            </div>
            <div className={styles.direita}>
              <div className={styles.cardOrcamento}>
                <div className={styles.tituloOrcamento}>
                  <span>Pedir orçamento</span>
                </div>
                <div className={styles.fundo}>
                  <div className={styles.detalhes}>
                    <span>Seus detalhes</span>
                  </div>
                  <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="date" />
                    <input type="number" />
                  </div>
                </div>
                <div>
                  <input type="text" className={styles.inputgrandona} />
                </div>
                <div>
                <div>
                    <LinkButton
                      to="/lista-tarefas"
                      label="Enviar consulta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={stylesAll.container}>
        <div className={stylesAll.containerOpcoes}>
          <div className={stylesAll.cardContainer}>
            <div className={stylesAll.cadaCard}>
              {currentCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  bairro={card.bairro}
                  cidade={card.cidade}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={stylesAll.paginacaoContainer}>
        <div>
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
          </div> */}
      <Baseboard />
    </div>
  );
}

export default Assessores;
