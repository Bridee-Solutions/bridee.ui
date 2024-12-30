import { useState } from "react";

import styles from "../Navbar/Navbar.module.css";
import "../../index.css";

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
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import MenuLink from "../MenuLink/MenuLink";
import DropdownItem from "../DropdownItem/DropdownItem";

function NavAssessor() {
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
      nome: "Calendário",
      descricao:
        "Visualize os casamentos confirmados no calendário e confira novas propostas de clientes.",
      icon: faCalendarAlt,
      rota: "/assessores/calendario",
    },
    {
      nome: "Painel",
      descricao:
        "Em breve",
      icon: faClipboardList,
      rota: "/lista-convidados/:casamentoId",
    },
    
    {
        nome: "Cronograma do Evento",
        descricao:
          "Em breve",
        icon: faListCheck,
        rota: "/assessores/cronograma",
    },
     ];

 
  const submenuOpcoes = {
    ferramentas: ferramentasDePlanejamento
  };

  const handleLogoff = () => {
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
          onClick={() => (window.location.href = "http://localhost:5173/")}
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
                      {ferramentasDePlanejamento.slice(1, 2).map((item) => (
                        <DropdownItem
                          key={item.nome}
                          item={item}
                          onClick={() => handleClick(item.nome, item.rota)}
                        />
                      ))}
                    </div>

                    <div className={styles.coluna}>
                      {/* Renderizando o quarto e o quinto item*/}
                      {ferramentasDePlanejamento.slice(2,3).map((item) => (
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
          

          <div className={styles.userIcon}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
          </div>
        </div>

        <div className={styles.circle}>
          <div className={styles.prala}>
            <div className={styles.configs}>
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
export default NavAssessor;
