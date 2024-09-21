import Header from "../../Componentes/Header";
import GroupComponent from "../../Componentes/GroupComponent";
import SearchBarContainer from "../../Componentes/SearchBarContainer";
import Features from "../../Componentes/Features";
import FORNECEDORESPORCATEGORIA from "../../Componentes/FornecedorPorCategoria";
import Venue from "../../Componentes/Venue";
import CONTAINERVESTIDO from "../../Componentes/ContainerVestido";
import NOSSOSCLIENTES from "../../Componentes/NossosClientes";
import PlannerDescription from "../../Componentes/PlannerDescription";
import FAQ from "../../Componentes/FAQ";
import Footer from "../../componentes/Footer";
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
      <FORNECEDORESPORCATEGORIA />
      <Venue />
      <CONTAINERVESTIDO />
      <NOSSOSCLIENTES />
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
