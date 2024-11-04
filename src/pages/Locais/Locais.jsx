import styles from "./Locais.module.css";
import Banner from "../../componentes/Banner/Banner";
import imagem from "../../assets/Banner/bannerLocais.svg";
import SearchBar from "../../componentes/LandingPage/SearchBar/SearchBar";
import Card from "../../componentes/Card/Card";
import Baseboard from '../../componentes/LandingPage/BaseBoard/Baseboard';
import Navbar from "../../componentes/Navbar/Navbar"
import image1 from "../../assets/mockImages/5.png";
import image2 from "../../assets/mockImages/33.png";
import image3 from "../../assets/mockImages/image.png";

function Locais() {
  const cardsData = [
    {
      title: "Pôr do Sol ",
      description: "Quer ter as melhores lembranças do seu casamento, oferecendo os melhores pratos e o melhor atendimento? Com o buffet Pôr do Sol tudo isso é possível. A sua mesa será farta e terá uma apresentação impecável, com as melhores representações da cozinha nacional e internacional, além de oferecer um...",
      imageUrl: image1,
    },
    {
      title: "Castelo de Monte Mor",
      description: "Castelo de Monte Mor é um local ideal para aqueles casais que estão a procura de um ambiente rústico para tornar esse dia inesquecível. Desde 1997 no ramo de eventos, a empresa que conta com ampla experiência, idealizou no castelo um cenário de festas de casamentos, noivados, bodas, aniversários, 15....",
      imageUrl: image2,
    },
    {
      title: "Hee Beach House",
      description: "Se quiser garantir tranquilidade durante todo o pré-casamento e a segurança de que tudo dará certo durante o dia da cerimônia, a dica é contratar o serviço cerimonial como o da Denise Monteiro Assessoria de Eventos, que garante não apenas encontrar os melhores fornecedores como também ser os olhos...",
      imageUrl: image3,
    },
    {
        title: "Local 1",
        description: "Talismã é uma empresa planejadora, organizadora e executora de mais belas e emocionantes cerimônias de casamento. Com profissionais altamente especializados na arte de ser cerimonialista, essa equipe vai realizar seu sonho de uma forma única, especial e inesquecível. ",
        imageUrl: image1,
      },
      {
        title: "Local 2",
        description: "Descrição do local 2.",
        imageUrl: image2,
      },
      {
        title: "Local 3",
        description: "Descrição do local 3.",
        imageUrl: image3,
      },
    
  ];

  return (
    <div>
        <Navbar/>
      <Banner
        imageUrl={imagem}
        title="Encontre os melhores locais para seu casamento"
        subtitle="Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais, tudo para um dia verdadeiramente memorável."
      >
        <div className={styles.searchbar}>
          <SearchBar />
        </div>
      </Banner>

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
      <Baseboard/>
    </div>
  );
}

export default Locais;
