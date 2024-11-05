import { useState } from "react";

import styles from "./Navbar.module.css";
import "../../index.css";

import { GiBigDiamondRing } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import weddingRing from "../../assets/wedding.svg";

import {
  faUser,
  faListCheck,
  faClipboardList,
  faChair,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../MenuLink/MenuLink";
import DropdownItem from "../DropdownItem/Dropdownitem";

function NavComp() {
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const handleDropdownClick = () => {
    setDropdownAberto(!dropdownAberto);
  };

  const handleClick = (nomeFerramenta) => {
    console.log(`Ferramenta selecionada: ${nomeFerramenta}`);
  };

  const ferramentasDePlanejamento = [
    {
      nome: "Painel",
      descricao:
        "Gerencie cada detalhe do seu casamento com facilidade, com todas as ferramentas que você precisa em um só lugar.",
      icon: <GiBigDiamondRing />,
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
    <nav className={styles.navbar}>
      <div className={styles.superior}>
        <div className={styles.logo}>
          bridee<span>.</span>
        </div>

        <div className={styles.menu}>
          <div className={styles.containerMenu}>
            <div
              className={styles.dropdownTitle}
              onClick={handleDropdownClick}
              aria-expanded={dropdownAberto}
            >
              Ferramentas de Planejamento{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.icon_arrow}
              />
            </div>

            <div className={styles.dropdown}>
              {dropdownAberto && (
                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.coluna}>
                      {/* Renderizando o primeiro item */}
                      <DropdownItem
                        key={ferramentasDePlanejamento[0].nome}
                        item={ferramentasDePlanejamento[0]}
                        onClick={handleClick}
                      />
                    </div>

                    <div className={styles.coluna}>
                      {/* Renderizando o segundo e terceiro item */}
                      {ferramentasDePlanejamento.slice(1, 3).map((item) => (
                        <DropdownItem
                          key={item.nome}
                          item={item}
                          onClick={handleClick}
                        />
                      ))}
                    </div>

                    <div className={styles.coluna}>
                      {/* Renderizando o quarto e o quinto item*/}
                      {ferramentasDePlanejamento.slice(3, 5).map((item) => (
                        <DropdownItem
                          key={item.nome}
                          item={item}
                          onClick={handleClick}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.containerMenu}>
            <div
              className={styles.dropdownTitle}
              aria-expanded={dropdownAberto}
            >
              Locais e Fornecedores{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.icon_arrow}
              />
            </div>
          </div>

          <div className={styles.userIcon}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
          </div>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <div className={styles.inferior}>
          <div className={styles.submenu}>
            <ul>
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
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavComp;
