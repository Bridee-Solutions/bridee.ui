import { useContext, useEffect, useState } from "react";
import mageFilter from "../../../assets/mage_filter.svg"
import styles from "./ConviteHeader.module.css"
import { request } from "../../../config/axios/axios";
import { CasalContext } from "../../../context/CasalContext";

const ConviteHeader = (props) => {

    const [resumo, setResumo] = useState()
    const {casamentoId} = useContext(CasalContext)

    useEffect(() => {
        request.getConvitesResumo(casamentoId).then((response) => {
            console.log(response.data);
            
            props.setConfirmados(response.data.totalConfirmado)
            setResumo(response.data)
        })
        
    },[])

    function capitalizeFirstLetter(text) {
        const stringCapitalized = String(text).charAt(0).toUpperCase() + String(text).toLowerCase().slice(1);
        return stringCapitalized.replaceAll("_", " ");
    }

    return(
        <div className={styles.convite_header}>
            <div className={styles.convite_header_title}>
                <img src={mageFilter} alt="" />
                <span>Total de convidados</span>
            </div>
            <div className={styles.convite_header_content}>
                <div className={styles.convite_header_content_item}>
                    <span>{resumo?.totalConvites ? resumo?.totalConvites : 0}</span>
                    <span>Convites</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>{resumo?.totalConvidados ? resumo?.totalConvidados : 0}</span>
                    <span>Convidados</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>{resumo?.totalAdultos ? resumo?.totalAdultos : 0}</span>
                    <span>Adultos</span>
                </div>
                <div className={styles.convite_header_content_item}>
                    <span>{resumo?.totalCriancas ? resumo?.totalCriancas : 0}</span>
                    <span>Crianças</span>
                </div>
                {resumo?.resumoCategorias?.map((categoria) => {
                    return <div className={styles.convite_header_content_item}>
                        <span>{categoria?.total}</span>
                        <span>{capitalizeFirstLetter(categoria?.nome)}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ConviteHeader;