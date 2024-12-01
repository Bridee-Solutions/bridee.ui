import styles from "./ConviteBody.module.css"
import filterImage from "../../../assets/filter-image.png"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { adicionarConviteModal, conviteModal, defineConvidadoStatusColor } from "../../../pages/Convites/ConvitesService";
import { useEffect } from "react";

const ConviteBody = (props) => {


    useEffect(() => {
        
    },[props.convites])

    function capitalizeFirstLetter(text) {
        const stringCapitalized = String(text).charAt(0).toUpperCase() + String(text).toLowerCase().slice(1);
        return stringCapitalized.replaceAll("_", " ");
    }

    return(
        <div className={styles.convite_body}>
            <div className={styles.body_header}>
                <h2>Lista de Convidados</h2>
                <p>Aqui você pode visualizar e gerenciar todos os convidados do seu evento. 
                Utilize os filtros para encontrar convidados específicos ou adicione novos convites conforme necessário.</p>
            </div>
            <div className={styles.body_filter}>
                <div className={styles.filter}>
                    <div className={styles.filter_input}>
                        <input type="text" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.filter_input_icon}/>
                    </div>
                    <div className={styles.body_filter_button}>
                        <img src={filterImage} alt="" />
                        <span>Filtro</span>
                        {/* <div className={styles.body_filter_options}>
                            <div className={styles.body_filter_option}>
                                <span>Status</span>
                                <div className={styles.status_option}>
                                    <div className={styles.yellow_circle}></div>
                                    <span>Sem resposta</span>
                                </div>
                                <div className={styles.status_option}>
                                    <div className={styles.green_circle}></div>
                                    <span>Irá comparecer</span>
                                </div>
                                <div className={styles.status_option}>
                                    <div className={styles.red_circle}></div>
                                    <span>Não irá comparecer</span>
                                </div>
                            </div>
                            <div className={styles.body_filter_option}>
                                <span>Faixa etária</span>
                                <span>Adulto</span>
                                <span>Criança</span>
                            </div>
                            <div className={styles.body_filter_option}>
                                <span>Categorias</span>
                                <span>Amigos</span>
                                <span>Colegas de trabalho</span>
                                <span>Familia Amanda</span>
                            </div>
                        </div> */}
                    </div>
                    <button onClick={() => adicionarConviteModal(props.closeModal, props.setActualModal, props.convites, props.setConvites)}>+ Adicionar Convite</button>
                </div>
            </div>
            <div className={styles.body_content}>
                {props.convites?.map((convite) => {
                return <div key={convite.nome} className={styles.body_content_itens}>
                        <div className={styles.body_content_item}>
                            <h3>{convite.nome}</h3>
                            <button onClick={() => conviteModal(convite, props.closeModal, 
                                props.setActualModal, props.convites, props.setConvites)}>Ver Convite -</button>
                        </div>
                        {convite.convidados?.map((convidado) => {
                            return <div key={convidado?.telefone} className={styles.body_content_item}>
                                <div className={styles.circle_item}>
                                    <div className={defineConvidadoStatusColor(convidado?.status, styles)}></div>
                                    <p>{convidado?.nome}</p>
                                </div>
                                <div className={styles.body_content_item_specific}>
                                    <span>{capitalizeFirstLetter(convidado?.categoriaConvidado?.nome)}</span>
                                    <span>{convidado?.faixaEtaria}</span>
                                </div>
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    );
}

export default ConviteBody;