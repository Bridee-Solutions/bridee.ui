import React from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Banner from '../../componentes/LandingPage/Banner/Banner';
import SearchBar from '../../componentes/LandingPage/SearchBar/SearchBar';
import Card from '../../componentes/Card/Card';
import Baseboard from '../../componentes/LandingPage/BaseBoard/Baseboard';
import styles from './Fornecedores.module.css';
import bannerImage from '../../assets/bannerFornecedores.png';
import vestidos from '../../assets/vestidos.png';
import fotografo from '../../assets/fotografo.png';
import florista from '../../assets/florista.png';
import buffet from '../../assets/buffet.png';
import decoracao from '../../assets/decoracao.png';
import locais from '../../assets/locais.png';
import transporte from '../../assets/transporte.png';
import padeiro from '../../assets/padeiro.png';
import moda from '../../assets/moda.png';
import videografo from '../../assets/videografo.png';
import papelaria from '../../assets/papelaria.png';
import entretenimento from '../../assets/entretenimento.png';
import Container from '../../componentes/ContainerPages/Container';

const Fornecedores = () => {

  const categorias = [
    { title: 'Vestidos', imageUrl: vestidos },
    { title: 'Fotógrafo', imageUrl: fotografo },
    { title: 'Floristas', imageUrl: florista},
    { title: 'Buffet & Gastronomia', imageUrl: buffet },
    { title: 'Decoração', imageUrl: decoracao },
    { title: 'Locais', imageUrl: locais },
    { title: 'Transporte & Acomodação', imageUrl: transporte },
    { title: 'Padaria de Bolos', imageUrl: padeiro },
    { title: 'Moda & Beleza', imageUrl: moda },
    { title: 'Videógrafos', imageUrl: videografo },
    { title: 'Papelaria', imageUrl: papelaria},
    { title: 'Entretenimento', imageUrl: entretenimento }
  ];

  return (
    <div className={styles.fornecedores_page}>
      <Navbar />
        <Container
          bannerTitle="Encontre os melhores fornecedores para seu casamento"
          bannerSubtitle="Descubra e contrate os fornecedores para vestuário, decoração, gastronomia e muito mais."
          bannerImage={bannerImage}
        />
      <div className={styles.categorias}>
        <div className={styles.categorias_title}>
          <h2>Navegar por categoria</h2>
          <p>Explore os melhores fornecedores de casamento em todas as categorias e descubra o melhor dos melhores para o seu dia especial.</p>
        </div>
        <div className={styles.grid}>
          {categorias.map((categoria, index) => (
            <Card
              key={index}
              title={categoria.title}
              description="Descubra os melhores"
              imageUrl={categoria.imageUrl}
            />
          ))}
        </div>
        <div className={styles.fornecedores_footer}>
          <Baseboard />
        </div>
      </div>
    </div>
  );
};

export default Fornecedores;
