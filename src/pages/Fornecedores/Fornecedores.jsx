import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Banner from "../../componentes/Banner/Banner";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Pagination from "@mui/material/Pagination";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";

import imagem from "../../assets/Banner/bannerFornecedores.svg";
import stylesAll from "../Locais/Locais.module.css";
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";

function Fornecedores() {
  const [cardsData, setCardsData] = useState([]);
  const [page, setPage] = useState(1); 
  const cardsPerPage = 6; // Quantidade de cartões por página

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          title: "Pôr do Sol",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image1,
        },
        {
          title: "Castelo de Monte Mor",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image2,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
        },
        {
          title: "Hee Beach House",
          description:
            "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um bla bla",
          imageUrl: image3,
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
        <div className={stylesAll.cardContainer}>
          <div className={stylesAll.cadaCard}>
            {currentCards.map((card, index) => (
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
      <div className={stylesAll.paginacaoContainer}>
        <div>
          <Pagination
            count={totalPages} 
            page={page} // Página atual
            onChange={handleChange} // Função chamada ao mudar de página
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#DD7B78",
                color: "#FFFFFF",
              },
            }}
          />
        </div>
      </div>
      <Baseboard />
    </div>
  );
}

export default Fornecedores;
