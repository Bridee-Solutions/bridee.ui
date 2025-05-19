import styles from "./ConviteBody.module.css";
import filterImage from "../../../assets/filter-image.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { adicionarConviteModal, conviteModal, defineConvidadoStatusColor } from "../../../pages/Convites/ConvitesService";
import { useRef, useState } from "react";
import { request } from "../../../config/axios/axios";

const ConviteBody = (props) => {

    const status = useRef("");
    const faixaEtaria = useRef("");
    const categoria = useRef("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filter = useRef();

  function capitalizeFirstLetter(text) {
    const stringCapitalized =
      String(text).charAt(0).toUpperCase() +
      String(text).toLowerCase().slice(1);
    return stringCapitalized.replaceAll("_", " ");
  }

  const applyFilter = () => {
    status.current = "";
    categoria.current = "";
    faixaEtaria.current = "";
    fetchConvitesFiltered();
  };

  const searchAll = () => {
    request.getConvitesFromCasamento().then((response) => {
      props.setConvites(response.data.content);
    });
  };

  const defineCategory = (value) => {
    setIsFilterOpen(false);
    faixaEtaria.current = "";
    status.current = "";
    categoria.current = value;
    fetchConvitesFiltered();
  };

  const defineStatus = (value) => {
    setIsFilterOpen(false);
    faixaEtaria.current = "";
    status.current = value;
    categoria.current = "";
    fetchConvitesFiltered();
  };

  const defineFaixaEtaria = (value) => {
    setIsFilterOpen(false);
    faixaEtaria.current = value;
    status.current = "";
    categoria.current = "";
    fetchConvitesFiltered();
  };

  const fetchConvitesFiltered = () => {
    const nomeConvidado = filter.current.value;

    request
      .getConvitesFromCasamento(
        status.current,
        faixaEtaria.current,
        categoria.current,
        nomeConvidado
      )
      .then((response) => {
        console.log(response.data.content);
        props.setConvites(response.data.content);
      });
  };

  return (
    <div className={styles.convite_body}>
      <div className={styles.body_header}>
        <span>Lista de Convidados</span>
        <div className={styles.containerSubtitulo}>
          <p>
            Aqui você pode visualizar e gerenciar todos os convidados do seu
            evento. Utilize os filtros para encontrar convidados específicos ou
            adicione novos convites conforme necessário.
          </p>
        </div>
      </div>
      <div className={styles.body_filter}>
        <div className={styles.filter}>
          <div className={styles.filter_input}>
            <input type="text" ref={filter} />
            <FontAwesomeIcon
              onClick={applyFilter}
              icon={faMagnifyingGlass}
              className={styles.filter_input_icon}
            />
          </div>
          <div
            className={styles.body_filter_button}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <img src={filterImage} alt="" />
            <span>Filtro</span>
            {isFilterOpen && (
              <div className={styles.body_filter_options}>
                <div className={styles.body_filter_option} onClick={searchAll}>
                  <span>Todos</span>
                </div>
                <div className={styles.body_filter_option}>
                  <span>Status</span>
                  <div
                    className={styles.status_option}
                    onClick={() => defineStatus("SEM_RESPOSTA")}
                  >
                    <div className={styles.yellow_circle}></div>
                    <span>Sem resposta</span>
                  </div>
                  <div
                    className={styles.status_option}
                    onClick={() => defineStatus("CONFIRMADO")}
                  >
                    <div className={styles.green_circle}></div>
                    <span>Irá comparecer</span>
                  </div>
                  <div
                    className={styles.status_option}
                    onClick={() => defineStatus("RECUSADO")}
                  >
                    <div className={styles.red_circle}></div>
                    <span>Não irá comparecer</span>
                  </div>
                </div>
                <div className={styles.body_filter_option}>
                  <span>Faixa etária</span>
                  <span onClick={() => defineFaixaEtaria("ADULTO")}>
                    Adulto
                  </span>
                  <span onClick={() => defineFaixaEtaria("CRIANCA")}>
                    Criança
                  </span>
                </div>
                <div className={styles.body_filter_option}>
                  <span>Categorias</span>
                  <span onClick={() => defineCategory("AMIGOS")}>Amigos</span>
                  <span onClick={() => defineCategory("COLEGAS_DE_TRABALHO")}>
                    Colegas de trabalho
                  </span>
                  <span onClick={() => defineCategory("FAMILIA_DA_NOIVA")}>
                    Familia da noiva
                  </span>
                  <span onClick={() => defineCategory("FAMILIA_DO_NOIVO")}>
                    Familia do noivo
                  </span>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() =>
              adicionarConviteModal(
                props.closeModal,
                props.setActualModal,
                props.convites,
                props.setConvites
              )
            }
          >
            + Adicionar convite
          </button>
        </div>
      </div>
      <div className={styles.body_content}>
        {props.convites?.length === 0 && (
          <div className={styles.no_results_message}>
            <p>
              Nenhum convite encontrado. Tente ajustar os filtros ou adicionar
              novos convites.
            </p>
          </div>
        )}
        {props.convites?.length > 0 &&
          props.convites.map((convite) => {
            return (
              <div key={convite.nome} className={styles.body_content_itens}>
                <div className={styles.body_content_item}>
                  <h3>{convite.nome}</h3>
                  <button
                    onClick={() =>
                      conviteModal(
                        convite,
                        props.closeModal,
                        props.setActualModal,
                        props.convites,
                        props.setConvites
                      )
                    }
                  >
                    Ver convite -
                  </button>
                </div>
                {convite.convidados?.map((convidado) => {
                  return (
                    <div
                      key={convidado?.telefone}
                      className={styles.body_content_item}
                    >
                      <div className={styles.circle_item}>
                        <div
                          className={defineConvidadoStatusColor(
                            convidado?.status,
                            styles
                          )}
                        ></div>
                        <p>{convidado?.nome}</p>
                      </div>
                      <div className={styles.body_content_item_specific}>
                        <span>
                          {capitalizeFirstLetter(
                            convidado?.categoriaConvidado?.nome
                          )}
                        </span>
                        <span>{convidado?.faixaEtaria}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConviteBody;
