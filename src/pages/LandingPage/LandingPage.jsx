import Header from "../../componentes/Header"; 
import GroupComponent from "../../Componentes/GroupComponent";
import SearchBarContainer from "../../Componentes/SearchBarContainer";
import Features from "../../componentes/Features"; 
import FornecedorPorCategoria from "../../Componentes/FornecedorPorCategoria";
import Venue from "../../Componentes/Venue";
import ContainerVestido from "../../Componentes/ContainerVestido";
import NossosClientes from "../../Componentes/NOSSOSCLIENTES"; 
import PlannerDescription from "../../Componentes/PlannerDescription";
import FAQ from "../../Componentes/FAQ";
import Footer from "../../componentes/Footer";
import UltimaSessao from "../../componentes/UltimaSessao";
import FooterLinks from "../../Componentes/FooterLinks";
import "./LandingPage.module.css";


const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="borda-azul-da-navbar" />
      <Header />
      <GroupComponent />
      <img className="imagem-icon" alt="" />
      <img className="imagem-icon" alt="" />
      <SearchBarContainer />
      <Features />
      <FornecedorPorCategoria />
      <Venue />
      <ContainerVestido />
      <NossosClientes />
      <div className="planner-description-wrapper">
        <PlannerDescription />
      </div>
      <div className="opcoes">
        <div className="menu2">
          <div className="lorem-ipsum">lorem ipsum</div>
          <img className="weuiarrow-outlined-icon" alt="" />
        </div>
        <div className="menu1">
          <div className="lorem-ipsum">lorem ipsum</div>
          <img className="weuiarrow-outlined-icon" alt="" />
        </div>
        <div className="menu21">
          <div className="lorem-ipsum">lorem ipsum</div>
          <img className="weuiarrow-outlined-icon" alt="" />
        </div>
      </div>
      <FAQ />
      <UltimaSessao/>
      <Footer />
      <img className="bolinhas-icon" alt="" />
      <img className="vestidos-icon" alt="" />
      <FooterLinks />
      <footer className="legal">
        <div className="legal-child" />
        <div className="bridee-todos-os">
          © 2024 bridee. Todos os direitos reservados.
        </div>
      </footer>
      <img className="musica-1-icon" alt="" src="/musica-1@2x.png" />
    </div>
  );
};

export default LandingPage;
