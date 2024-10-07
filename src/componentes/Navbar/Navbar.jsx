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
  faClipboardList,
  faChair,
  faCalculator,
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
      descricao:
        "Gerencie cada detalhe do seu casamento com facilidade, com todas as ferramentas que você precisa em um só lugar.",
      icon: faClipboardList,
    },
    {
      nome: "Lista de convidados",
      descricao:
        "Uma lista de convidados prática e intuitiva para ajudar você a gerenciar facilmente quem irá convidar e acompanhar as confirmações.",
      icon: faClipboardList,
    },
    {
      nome: "Lista de tarefas",
      descricao:
        "Nossa lista de verificação de planejamento de casamento é a maneira mais fácil de gerenciar o cronograma do planejamento do seu casamento sem estresse",
      icon: faListCheck,
    },
    {
      nome: "Planejador de assentos",
      descricao:
        "Um planejador de assentos intuitivo para organizar sua recepção de forma fácil e eficaz.",
      icon: faChair,
    },
    {
      nome: "Calculadora Financeira",
      descricao:
        "Uma calculadora financeira prática para ajudá-la a planejar o orçamento do seu grande dia.",
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
                <Container className="container-pai">
                  <div className="container_coluna">
                    <div className="coluna">
                      {ferramentasDePlanejamento.slice(0, 1).map((item) => (
                        <Container key={item.nome} className="container-item">
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="icons"
                            />
                            <span className="item_nome">{item.nome}</span>
                          </NavDropdown.Item>
                          <div className="descricao">
                            <span>{item.descricao}</span>
                          </div>
                        </Container>
                      ))}
                    </div>
                  </div>
                  <div className="container_coluna">
                    <div className="coluna">
                      {ferramentasDePlanejamento.slice(1, 3).map((item) => (
                        <Container key={item.nome} className="container-item">
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                            <div className="titulo_opcao"></div>
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="icons"
                            />
                            <span className="item_nome">{item.nome}</span>
                          </NavDropdown.Item>
                          <div className="descricao">
                            <span>{item.descricao}</span>
                          </div>
                        </Container>
                      ))}
                    </div>
                  </div>

                  <div className="container_coluna">
                    <div className="coluna">
                      {ferramentasDePlanejamento.slice(3, 5).map((item) => (
                        <Container key={item.nome} className="container-item">
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                            <div className="titulo_opcao">
                              <FontAwesomeIcon
                                icon={item.icon}
                                className="icons"
                              />
                              <span className="item_nome">{item.nome}</span>
                            </div>
                          </NavDropdown.Item>
                          <div className="descricao">
                            <span>{item.descricao}</span>
                          </div>
                        </Container>
                      ))}
                    </div>
                  </div>
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
                className="menu_suspenso"
              ></NavDropdown>
            </Nav>

            {/* Ícones na direita */}
            <Nav className="icones-direita">
              <Nav.Link href="/configuracoes" className="icone-usuario">
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
