import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import "../../index.css";
import globalStyles  from "../../assets/global-styles/bootstrap.min.module.css";

import { GiBigDiamondRing } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";

import weddingRing from "../../assets/wedding.svg";

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
        icon: weddingRing,
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
    <Navbar collapseOnSelect expand="lg" className={globalStyles["bg-body-tertiary"]}>
      <Container className={styles.principal}>
        <Container className={styles.superior}>
          <Navbar.Brand href="" className={styles.logo}>
            bridee<span>.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={globalStyles["me-auto"]}>
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
                className={styles.menu_suspenso}
              >
                <Container className={styles.container_pai}>
                  <div className={styles.container_coluna}>
                    <div className={styles.coluna}>
                      {ferramentasDePlanejamento.slice(0, 1).map((item) => (
                        <Container key={item.nome} className={styles["container-item"]}>
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                           <GiBigDiamondRing className={styles.iconsR} />
                            <span className={styles.item_nome}>{item.nome}</span>
                          </NavDropdown.Item>
                          <div className={styles.descricao}>
                            <span>{item.descricao}</span>
                          </div>
                        </Container>
                      ))}
                    </div>
                  </div>
                  <div className={styles.container_coluna}>
                    <div className={styles.coluna}>
                      {ferramentasDePlanejamento.slice(1, 3).map((item) => (
                        <Container key={item.nome} className={styles["container-item"]}>
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                            <div className={styles.titulo_opcao}></div>
                            <FontAwesomeIcon
                              icon={item.icon}
                              className={styles.icons}
                            />
                            <span className={styles.item_nome}>{item.nome}</span>
                          </NavDropdown.Item>
                          <div className={styles.descricao}>
                            <span>{item.descricao}</span>
                          </div>
                        </Container>
                      ))}
                    </div>
                  </div>

                  <div className={styles.container_coluna}>
                    <div className={styles.coluna}>
                      {ferramentasDePlanejamento.slice(3, 5).map((item) => (
                        <Container key={item.nome} className={styles["container-item"]}>
                          <NavDropdown.Item
                            onClick={() => handleClick(item.nome)}
                          >
                            <div className={styles.titulo_opcao}>
                              <FontAwesomeIcon
                                icon={item.icon}
                                className={styles.icons}
                              />
                              <span className={styles.item_nome}>{item.nome}</span>
                            </div>
                          </NavDropdown.Item>
                          <div className={styles.descricao}>
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
                className={styles.menu_suspenso}
              ></NavDropdown>
            </Nav>

            {/* Ícones na direita */}
            <Nav className={styles.icones_direita}>
              <Nav.Link href="/configuracoes" className={styles.icone_usuario}>
                <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* Navegação inferior */}
        <Container className={styles.inferior}>
          <ul className={styles.submenu}>
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
              <MenuLink to="/planejador-assentos">Planejador de Assentos</MenuLink>
            </li>
            <li>
              <MenuLink to="/calculadora-financeira">Calculadora Financeira</MenuLink>
            </li>
          </ul>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavComp;