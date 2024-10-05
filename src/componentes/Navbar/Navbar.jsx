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
import { faUser, faListCheck, faUsers, faClipboardList, faChair, faCalculator, faChevronRight  } from "@fortawesome/free-solid-svg-icons";
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
                <Container className="container-menu-suspenso">
                  <Container className="container_one">
                    <div className="titulo">
                      <div className="icon"></div>
                      <NavDropdown.Item
                        onClick={() => handleClick("Painel")}
                        className={
                          selecaoAtual === "Painel" ? "selecao-ativa" : ""
                        }
                      >
                        Painel
                      </NavDropdown.Item>
                    </div>
                    <div className="descricao">
                      <span>
                        Gerencie cada detalhe do seu casamento com facilidade,
                        com todas as ferramentas que você precisa em um só
                        lugar.
                      </span>
                    </div>
                  </Container>

                  <NavDropdown.Divider />

                  <Container className="container_two">
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
                          <FontAwesomeIcon icon={faClipboardList} className="icons" />
                          Lista de convidados
                          <FontAwesomeIcon icon={faChevronRight} className="icons_arrow" /> 
                        </NavDropdown.Item>
                      </div>

                      <div className="descricao">
                        <span>
                          Uma lista de convidados prática e intuitiva para
                          ajudar você a gerenciar facilmente quem irá convidar e
                          acompanhar as confirmações.
                        </span>
                      </div>
                    </div>

                    <div className="coluna_two">
                      <div className="titulo">
                        <div className="icon"></div>
                        <NavDropdown.Item
                          onClick={() => handleClick("Lista de tarefas")}
                          className={
                            selecaoAtual === "Lista de tarefas"
                              ? "selecao-ativa"
                              : ""
                          }
                        >
                           <FontAwesomeIcon icon={faListCheck} className="icons" />
                          Lista de tarefas
                          <FontAwesomeIcon icon={faChevronRight} className="icons_arrow" /> 

                        </NavDropdown.Item>
                        <div className="arrow">

                        </div>
                      </div>

                      <div className="descricao">
                        <span>
                          Nossa lista de verificação de planejamento de
                          casamento é a maneira mais fácil de gerenciar o
                          cronograma do planejamento do seu casamento sem
                          estresse.
                        </span>
                      </div>
                    </div>
                  </Container>

                  <NavDropdown.Divider />

                  <Container className="container_three">
                    <div className="coluna_three">
                      <div className="titulo">
                        <div className="icon"></div>
                        <NavDropdown.Item
                          onClick={() => handleClick("Planejador de assentos")}
                          className={
                            selecaoAtual === "Planejador de assentos"
                              ? "selecao-ativa"
                              : ""
                          }
                        >
                        <FontAwesomeIcon icon={faChair} className="icons" />

                          Planejador de assentos
                          <FontAwesomeIcon icon={faChevronRight} className="icons_arrow" /> 

                        </NavDropdown.Item>
                      </div>
                      
                      <div className="descricao">
                        <span>
                          Nossa lista de verificação de planejamento de
                          casamento é a maneira mais fácil de gerenciar o
                          cronograma do planejamento do seu casamento sem
                          estresse.
                        </span>
                      </div>
                    </div>

                    <div className="coluna_four">
                      <div className="titulo">
                        <div className="icon"></div>
                        <NavDropdown.Item
                          onClick={() => handleClick("Calculadora Financeira")}
                          className={
                            selecaoAtual === "Calculadora Financeira"
                              ? "selecao-ativa"
                              : ""
                          }
                        >
                          <FontAwesomeIcon icon={faCalculator} className="icons" />
                          Calculadora Financeira
                          <FontAwesomeIcon icon={faChevronRight} className="icons_arrow" /> 

                        </NavDropdown.Item>
                      </div>
                      <div className="descricao">
                        <span>
                          Nossa lista de verificação de planejamento de
                          casamento é a maneira mais fácil de gerenciar o
                          cronograma do planejamento do seu casamento sem
                          estresse.
                        </span>
                      </div>
                    </div>
                  </Container>
                </Container>
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
