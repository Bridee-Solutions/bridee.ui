import { useState } from "react";

import styles from "./Navbar.module.css";
import "../../index.css";

import { GiBigDiamondRing } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  faUser,
  faListCheck,
  faClipboardList,
  faChair,
  faCalculator,
  faHandshake,
  faLocationDot,
  faUserTie,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../MenuLink/MenuLink";
import DropdownItem from "../DropdownItem/DropdownItem";

function NavComp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [dropdownLocaisAberto, setDropdownLocaisAberto] = useState(false);

  const handleDropdownClick = () => {
    setDropdownAberto((prev) => !prev);
    if (dropdownLocaisAberto) setDropdownLocaisAberto(false);
  };

  const handleDropdownLocaisClick = () => {
    setDropdownLocaisAberto((prev) => !prev);
    if (dropdownAberto) setDropdownAberto(false);
  };

  const handleClick = (nomeFerramenta, rota) => {
    console.log(`Ferramenta selecionada: ${nomeFerramenta}`);
    if (rota) {
      navigate(rota);
    }
  };

  const [paginaAtiva, setPaginaAtiva] = useState("ferramentas");

  useEffect(() => {
    const path = location.pathname;
    if (
      path === "/locais" ||
      path === "/assessores" ||
      path === "/fornecedores"
    ) {
      setPaginaAtiva("locaisFornecedores");
    } else {
      setPaginaAtiva("ferramentas");
    }
  }, [location]);

  const ferramentasDePlanejamento = [
    {
      nome: "Painel",
      descricao:
        "Gerencie cada detalhe do seu casamento com facilidade, com todas as ferramentas que você precisa em um só lugar.",
      icon: <GiBigDiamondRing />,
      rota: "/painel",
    },
    {
      nome: "Lista de convidados",
      descricao:
        "Uma lista de convidados prática e intuitiva para ajudar você a gerenciar facilmente quem irá convidar e acompanhar as confirmações.",
      icon: faClipboardList,
      rota: "/lista-convidados/:casamentoId",
    },
    {
      nome: "Lista de tarefas",
      descricao:
        "Nossa lista de verificação de planejamento de casamento é a maneira mais fácil de gerenciar o cronograma do planejamento do seu casamento sem estresse",
      icon: faListCheck,
      rota: "/lista-tarefas",
    },
    {
      nome: "Planejador de assentos",
      descricao:
        "Um planejador de assentos intuitivo para organizar sua recepção de forma fácil e eficaz.",
      icon: faChair,
      rota: "/planejador-assentos",
    },
    {
      nome: "Calculadora Financeira",
      descricao:
        "Uma calculadora financeira prática para ajudá-la a planejar o orçamento do seu grande dia.",
      icon: faCalculator,
      rota: "/calculadora-financeira",
    },
  ];

  const LocaisEFornecedores = [
    {
      nome: "Assessores",
      descricao:
        "Explore nossos profissionais e encontre o assessor ideal para planejar cada detalhe do seu dia perfeito.",
      icon: faUserTie,
      rota: "/assessores",
    },
    {
      nome: "Fornecedores",
      descricao:
        "Descubra e compare fornecedores para vestuário, decoração, gastronomia e muito mais, tudo para um dia verdadeiramente memorável.",
      icon: faHandshake,
      rota: "/fornecedores",
    },
    {
      nome: "Locais",
      descricao:
        "Descubra e selecione espaços deslumbrantes que atendem ao seu estilo e orçamento, garantindo o cenário perfeito para o seu grande dia.",
      icon: faLocationDot,
      rota: "/locais",
    },
  ];

  const submenuOpcoes = {
    ferramentas: ferramentasDePlanejamento,
    locaisFornecedores: LocaisEFornecedores,
  };

  const handleLogoff = () => {
    localStorage.clear()
    navigate("/login");
  };

  const opcoesAtuais =
    paginaAtiva === "ferramentas"
      ? submenuOpcoes.ferramentas
      : submenuOpcoes.locaisFornecedores;

  return (
    <nav className={styles.navbar}>
      <div className={styles.superior}>
        <div
          className={styles.logo}
          onClick={() => navigate("/")}
        >
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
                        onClick={() =>
                          handleClick(
                            ferramentasDePlanejamento[0].nome,
                            ferramentasDePlanejamento[0].rota
                          )
                        }
                      />
                    </div>

                    <div className={styles.coluna}>
                      {/* Renderizando o segundo e terceiro item */}
                      {ferramentasDePlanejamento.slice(1, 3).map((item) => (
                        <DropdownItem
                          key={item.nome}
                          item={item}
                          onClick={() => handleClick(item.nome, item.rota)}
                        />
                      ))}
                    </div>

                    <div className={styles.coluna}>
                      {/* Renderizando o quarto e o quinto item*/}
                      {ferramentasDePlanejamento.slice(3, 5).map((item) => (
                        <DropdownItem
                          key={item.nome}
                          item={item}
                          onClick={() => handleClick(item.nome, item.rota)}
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
              onClick={handleDropdownLocaisClick}
              aria-expanded={dropdownLocaisAberto}
            >
              Locais e Fornecedores{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={handleDropdownLocaisClick}
                aria-expanded={dropdownLocaisAberto}
                className={styles.icon_arrow}
              />
            </div>

            {dropdownLocaisAberto && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    {LocaisEFornecedores.map((item) => (
                      <DropdownItem
                        key={item.nome}
                        item={item}
                        onClick={() => handleClick(item.nome, item.rota)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.userIcon}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
          </div>
        </div>

        <div className={styles.circle}>
          <div className={styles.prala}>
            <div className={styles.configs} onClick={() => navigate("/configuracoes-casal")}>
            
              <FontAwesomeIcon icon={faUser} className={styles.icon_nav} />
            </div>
            <div className={styles.configs} onClick={handleLogoff}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={styles.icon_nav}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerInferior}>
        <div className={styles.inferior}>
          <div className={styles.submenu}>
            <ul>
              {opcoesAtuais.map((opcao) => (
                <li key={opcao.nome}>
                  <MenuLink
                    to={opcao.rota}
                    onClick={() => setPaginaAtiva(opcao.nome.toLowerCase())}
                  >
                    {opcao.nome}
                  </MenuLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavComp;
