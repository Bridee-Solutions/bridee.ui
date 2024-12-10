import Navbar from "../../componentes/Navbar/Navbar";
import styles from "./Painel.module.css";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import LinkButton from "../../componentes/LinkButton/LinkButton";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categoria from "../../componentes/Categoria/Categoria";
import grupo from "../../assets/painel/grupo.svg";
import sentados from "../../assets/painel/sentados.svg";
import mesas from "../../assets/painel/mesas.svg";
import Contagem from "../../componentes/ContagemRegressiva/ContagemRegressiva";
import {
  faCalendarAlt,
  faUserFriends,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import edit from "../../assets/edit.svg";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Assessor from "../../componentes/Assessor/Assessor";
import ArcoFinanceiro from "../../componentes/ArcoFinanceiro/ArcoFinanceiro";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import { request } from "../../config/axios/axios";
import { CasalContext } from "../../context/CasalContext";


function Painel() {
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [dashboardInfo, setDashboardInfo] = useState({});
  const [orcamento, setOrcamento] = useState({})
  const {casamentoId} = useContext(CasalContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file], {type: "image/**"})
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        setImageUrl(reader.result)
        console.log(reader.result);
      }
      const formData = new FormData();
      formData.append("file", file)
      const imageMetadata = {
        nome: `${dashboardInfo.casamentoInfo.casal.nome}&${dashboardInfo.casamentoInfo.casal.nomeParceiro}`,
        tipo: `Perfil`,
        extensao: `${file.name.split(".")[file.name.split(".").length-1]}`
      }
      formData.append("metadata", JSON.stringify(imageMetadata))
      request.uploadProfilePicture(casamentoId,formData);
      
    }
  };

  const handleClickContainer = () => {
    if (!imageUrl) {
      inputRef.current.click();
    }
  };

  const handleEditClick = () => {
    inputRef.current.click();
  };

  const defineTarefaCheckBox = (status) => {
    if(status == "CONCLUIDO"){
      return true
    }
    return false
  }

  useEffect(() => {
    request.getDashboard(casamentoId).then(response => {
      setDashboardInfo(response.data)
      setOrcamento(response.data.orcamento)
      const url = `data:image/**;base64,${response.data.casamentoInfo.image}`
      setImageUrl(url)
    })
    
  }, [])

  return (
    <div className={styles.painelBackground}>
      <Navbar />
      <div className={styles.containerPai}>
        <div className={styles.containerRegulador}>
          <div className={styles.containerDireita}>
            <div className={styles.boxImagem}>
              <div
                className={styles.containerImagem}
                onClick={handleClickContainer}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.inputImagem}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
                {imageUrl ? (
                  <>
                    <img
                      src={`${imageUrl}`}
                      alt="Imagem Selecionada"
                      className={styles.imagemCirculo}
                    />
                    <div className={styles.iconEdit} onClick={handleEditClick}>
                      <img src={edit} alt="Editar" className={styles.edit} />
                    </div>
                  </>
                ) : (
                  <div className={styles.containerTexto}>
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      className={styles.iconeUpload}
                    />
                    <span>Escolher Arquivo</span>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.containerInfos}>
              <div className={styles.boxInformacoes}>
                <div className={styles.container_welcome_user}>
                  <span className={styles.welcome}>Bem vindo de volta,</span>
                  <span className={styles.user}>{dashboardInfo.casamentoInfo?.casal?.nome} & {dashboardInfo.casamentoInfo?.casal?.nomeParceiro}</span>
                </div>

                <div className={styles.iconsContainer}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{new Date(dashboardInfo.casamentoInfo?.dataCasamento).toLocaleString("pt-br").split(",")[0] ? 
                        new Date(dashboardInfo.casamentoInfo?.dataCasamento).toLocaleString("pt-br").split(",")[0] : "---"
                    }</span>
                  </div>

                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span>{dashboardInfo.casamentoInfo?.quantidadeConvidados} convidados</span>
                  </div>

                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{dashboardInfo.casamentoInfo?.local}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.caixaCountdown}>
            <div className={styles.containerContagem}>
              <Contagem dataCasamento={dashboardInfo.casamentoInfo?.dataCasamento}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.conteudo}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.content}>
            <div className={styles.container_titulodesc}>
              <div className={styles.caixa}>
                <span className={styles.titulo_clnesq}>Meus fornecedores</span>
                <span className={styles.descricao}>
                Encontre e adicione os fornecedores ideais para o seu evento.
                </span>
              </div>
            </div>

            <div className={styles.filtros}>
              <div className={styles.containerFiltro}>
                <input
                  className={styles.inputPesquisa}
                  type="text"
                  placeholder="Pesquisar categoria de fornecedores"
                />
                <input
                  className={styles.inputFiltro}
                  type="text"
                  placeholder="Filtrar por tipo"
                />
              </div>
            </div>
            <>
              <Categoria orcamentoFornecedores={dashboardInfo?.orcamentoFornecedorResponse} orcamento={orcamento} setOrcamento={setOrcamento} />
            </>

            <div>
              <div className={styles.container_titulodesc}>
                <div className={styles.caixaAssessor}>
                  <span className={styles.titulo_clnesq}>
                    Meu assessor de casamento
                  </span>
                  <span className={styles.descricao}>
                  Encontre o profissional que vai transformar seus sonhos em realidade.
                  </span>
                </div>

                <>
                  <Assessor assessorResponseDto={dashboardInfo?.assessorResponseDto} orcamento={orcamento} setOrcamento={setOrcamento}/>
                </>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerColunaDireita}>
          <div className={styles.colunaDireita}>
            <div className={styles.conteudoColuna}>
              <div className={styles.boxColuna}>
                <div className={styles.containerTitulo}>
                  <span>Lista de tarefas</span>
                  <div className={styles.divider}></div>
                </div>

                <div className={styles.listaTarefas}>
                  <div className={styles.listaTarefas}>
                    {dashboardInfo?.tarefas?.ultimasTarefas.map(tarefa => {
                      return <div
                        className={`${styles.tarefa} ${styles.checkboxWrapper}`}
                      >
                        <div className={styles.round}>
                          <input
                            type="checkbox"
                            checked={defineTarefaCheckBox(tarefa?.status)}
                          />
                          <label htmlFor="tarefa1"></label>
                        </div>
                        <label htmlFor="tarefa1">
                          {tarefa.nome}
                        </label>
                      </div>
                    })}
                  </div>
                </div>

                <div className={styles.containerBotao}>
                  <div>
                    <LinkButton
                      to="/lista-tarefas"
                      label="Ver todas as tarefas"
                    />
                  </div>
                  <div className={styles.contador}>{dashboardInfo.tarefas?.totalConcluidos} de {dashboardInfo.tarefas?.totalItens} itens completos</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
            <div className={styles.conteudoColuna}>
              <div className={styles.containerTitulo}>
                <span>Meu orçamento</span>
                <div className={styles.divider}></div>
              </div>

              <div>
                <div className={styles.containerOrcamento}>
                  <div className={styles.orcamento}>
                    <ArcoFinanceiro gasto={orcamento?.orcamentoGasto} total={orcamento?.orcamentoTotal}/>
                  </div>

                  <div className={styles.containerBotao}>
                    <LinkButton
                      to="/calculadora-financeira"
                      label="Ver calculadora financeira"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.colunaDireita}>
            <div className={styles.conteudoColuna}>
              <div className={styles.containerTitulo}>
                <span>Planejador de assentos</span>
                <div className={styles.divider}></div>
              </div>
              <div className={styles.conteudoPlanejador}>
                <div className={styles.colunaPlanejador}>
                  <div className={styles.containerImgDesc}>
                    <div className={styles.iconePlanejador}>
                      <img src={grupo}></img>
                    </div>

                    <div className={styles.descricaoPlanejador}>
                      <span>Total de convidados</span>
                    </div>
                  </div>
                  <div>
                    <span>{dashboardInfo.assentosResumo?.totalConvidados}</span>
                  </div>
                </div>
              </div>

              <div className={styles.conteudoPlanejador}>
                <div className={styles.colunaPlanejador}>
                  <div className={styles.containerImgDesc}>
                    <div className={styles.iconePlanejador}>
                      <img src={sentados}></img>
                    </div>

                    <div className={styles.descricaoPlanejador}>
                      <span>Convidados sentados</span>
                    </div>
                  </div>
                  <div>
                    <span>{dashboardInfo.assentosResumo?.convidadosSentados}</span>
                  </div>
                </div>
              </div>

              <div className={styles.conteudoPlanejador}>
                <div className={styles.colunaPlanejador}>
                  <div className={styles.containerImgDesc}>
                    <div className={styles.iconePlanejador}>
                      <img src={mesas}></img>
                    </div>

                    <div className={styles.descricaoPlanejador}>
                      <span>Total de mesas</span>
                    </div>
                  </div>
                  <div>
                    <span>{dashboardInfo.assentosResumo?.totalMesas}</span>
                  </div>
                </div>
              </div>

              <div className={styles.containerBotao}>
                <LinkButton
                  to="/planejador-assentos"
                  label="Gerenciar assentos"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Baseboard />
      </footer>
    </div>
  );
}

export default Painel;
