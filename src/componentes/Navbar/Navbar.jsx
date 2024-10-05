import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../MenuLink/MenuLink";

function NavComp() {
  const [selecaoAtual, setSelecaoAtual] = useState("");

  const handleClick = (selecao) => {
    setSelecaoAtual(selecao);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="principal">
        <Container className="superior">
          <Navbar.Brand href="" className={styles.logo}>
            bridee<span>.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Ferramentas de Planejamento */}
              <NavDropdown
                title={
                  <>
                    Ferramentas de Planejamento{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ color: "#DD7B78" }}
                    />
                  </>
                }
                id="ferramentas-planejamento"
                className="menu_suspenso"
              >
                <NavDropdown.Item
                  onClick={() => handleClick("Painel")}
                  className={selecaoAtual === "Painel" ? "selecao-ativa" : ""}
                >
                  Painel
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleClick("Lista de convidados")}
                  className={
                    selecaoAtual === "Lista de convidados"
                      ? "selecao-ativa"
                      : ""
                  }
                >
                  Lista de convidados
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleClick("Lista de tarefas")}
                  className={
                    selecaoAtual === "Lista de tarefas" ? "selecao-ativa" : ""
                  }
                >
                  Lista de tarefas
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleClick("Planejador de assentos")}
                  className={
                    selecaoAtual === "Planejador de assentos"
                      ? "selecao-ativa"
                      : ""
                  }
                >
                  Planejador de assentos
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleClick("Calculadora Financeira")}
                  className={
                    selecaoAtual === "Calculadora Financeira"
                      ? "selecao-ativa"
                      : ""
                  }
                >
                  Calculadora Financeira
                </NavDropdown.Item>
              </NavDropdown>

              {/* Locais e Fornecedores */}
              <NavDropdown
                title={
                  <>
                    Locais e fornecedores{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ color: "#DD7B78" }}
                    />
                  </>
                }
                id="locais-fornecedores"
                className="menu-suspenso"
              >
                <NavDropdown.Item href="#action/3.1">Locais</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Fornecedores
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Ícones na direita */}
              <Nav className="icones-direita">
                {/* <Nav.Link href="#busca" className="icone-busca">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "#FFFFFF" }}
                  />
                </Nav.Link> */}
                <Nav.Link href="#usuario" className="icone-usuario">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
                </Nav.Link>
              </Nav>
            
          </Navbar.Collapse>
        </Container>


        
        {/*Navegação inferior*/}
        <Container className="inferior">
          <ul className="submenu">
            <li>
              <MenuLink to="/painel">Painel</MenuLink>
            </li>
            <li>
              <MenuLink to="/lista-convidados">Lista de Convidados</MenuLink>
            </li>
            <li>
              <MenuLink to="/lista-tarefas">Lista de Tarefas</MenuLink>
            </li>
            <li>
              <MenuLink to="/planejador-assentos">
                Planejador de Assentos
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/calculadora-financeira">
                Calculadora Financeira
              </MenuLink>
            </li>
          </ul>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavComp;
