import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import "../../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faListCheck,
  faUsers,
  faClipboardList,
  faChair,
  faCalculator,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../MenuLink/MenuLink";

function NavComp() {
  const [selecaoAtual, setSelecaoAtual] = useState("");

  const handleClick = (selecao) => {
    setSelecaoAtual(selecao);
  };

  const ferramentasDePlanejamento = [
    {
      nome: "Painel",
      descricao: "Gerencie cada detalhe do seu casamento com facilidade, com todas as ferramentas que você precisa em um só lugar.",
      icon: faClipboardList,
    },
    {
      nome: "Lista de convidados",
      descricao: "Uma lista de convidados prática e intuitiva para ajudar você a gerenciar facilmente quem irá convidar e acompanhar as confirmações.",
      icon: faClipboardList,
    },
    {
      nome: "Lista de tarefas",
      descricao: "Nossa lista de verificação de planejamento de casamento é a maneira mais fácil de gerenciar o cronograma do planejamento do seu casamento sem estresse",
      icon: faListCheck,
    },
    {
      nome: "Planejador de assentos",
      descricao: "Um planejador de assentos intuitivo para organizar sua recepção de forma fácil e eficaz.",
      icon: faChair,
    },
    {
      nome: "Calculadora Financeira",
      descricao: "Uma calculadora financeira prática para ajudá-la a planejar o orçamento do seu grande dia.",
      icon: faCalculator,
    },
  ];

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
                 {ferramentasDePlanejamento.map((item) => (
                  <Container key={item.nome} className="container-item">
                    <NavDropdown.Item
                      onClick={() => handleClick(item.nome)}
                      className={selecaoAtual === item.nome ? "selecao-ativa" : ""}
                    >
                      <FontAwesomeIcon icon={item.icon} className="icons" />
                      {item.nome}
                      <FontAwesomeIcon icon={faChevronRight} className="icons_arrow" />
                    </NavDropdown.Item>
                    <div className="descricao">
                      <span>{item.descricao}</span>
                    </div>
                    <NavDropdown.Divider />
                  </Container>
                ))}
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
                <Container className="container-menu-suspenso">
                  <Container className="container_one_fornecedores">
                    <div className="titulo">
                      <div className="icon"></div>
                      <NavDropdown.Item
                        onClick={() => handleClick("Painel")}
                        className={
                          selecaoAtual === "Painel" ? "selecao-ativa" : ""
                        }
                      >
                        Por categoria
                      </NavDropdown.Item>
                    </div>
                    
                      <div className="lista">
                        <span>Fotógrafo</span>
                        <span>Florista</span>
                      </div>
                    
                  </Container>
                </Container>

                <NavDropdown.Divider />

                <Container className="container_two_fornecedores">
                  <div className="coluna_one">
                    <div className="titulo">
                      <NavDropdown.Item
                        onClick={() => handleClick("Lista de convidados")}
                        className={
                          selecaoAtual === "Lista de convidados"
                            ? "selecao-ativa"
                            : ""
                        }
                      >
                        <FontAwesomeIcon
                          icon={faClipboardList}
                          className="icons"
                        />
                        Estilo de casamento
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="icons_arrow"
                        />
                      </NavDropdown.Item>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
            </Nav>

            {/* Ícones na direita */}
            <Nav className="icones-direita">
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
