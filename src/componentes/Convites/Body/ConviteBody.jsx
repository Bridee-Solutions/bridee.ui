import styles from "./ConviteBody.module.css"
import filterImage from "../../../assets/filter-image.png"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConviteBody = (props) => {
    
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
                    </div>
                    <button onClick={() => props.setActualModal("Adicionar Convite")}>+ Adicionar Convite</button>
                </div>
            </div>
            <div className={styles.body_content}>
                <div className={styles.body_content_itens}>
                    <div className={styles.body_content_item}>
                        <h3>Família Forbes</h3>
                        <button onClick={() => props.setActualModal("Convite")}>Ver Convite -</button>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.circle_item}>
                            <div className={styles.green_circle}></div>
                            <p>Convidado 1</p>
                        </div>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.circle_item}>
                            <div className={styles.yellow_circle}></div>
                            <p>Convidado 2</p>
                        </div>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.circle_item}>
                            <div className={styles.red_circle}></div>
                            <p>Convidado 3</p>
                        </div>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 4</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                </div>
                <div className={styles.body_content_itens}>
                    <div className={styles.body_content_item}>
                        <h3>Família Forbes</h3>
                        <button>Ver Convite -</button>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 1</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 2</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 3</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 4</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                </div>
                <div className={styles.body_content_itens}>
                    <div className={styles.body_content_item}>
                        <h3>Família Forbes</h3>
                        <button>Ver Convite -</button>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 1</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 2</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 3</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <p>Convidado 4</p>
                        <div className={styles.body_content_item_specific}>
                            <span>Família Amanda</span>
                            <span>Adulto</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConviteBody;