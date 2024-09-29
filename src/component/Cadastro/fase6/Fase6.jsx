import { useEffect, useRef } from "react";
import styles from "./Fase6.module.css"
import { componenteFase, definirProximaFase } from "../../../pages/Cadastro/fases";
import { toast } from "react-toastify";

const Fase6 = (props) => {

    const radio1 = useRef()
    const radio2 = useRef()
    const radio3 = useRef()
    const radio4 = useRef()
    const radio5 = useRef()
    const radio6 = useRef()
    const radio7 = useRef()
    const radios = Array.of(radio1, radio2, radio3, radio4, radio5, radio6, radio7);

    const proximaFase = () => {
        const activeRadios = radios.filter(radio => radio.current.checked == true)[0];
        if(activeRadios == undefined){
           toast.error("Selecione uma opção")
        }
        props.usuario.quantidadeConvidados = numeroDeConvidados(activeRadios.current)
        props.setFase(componenteFase(definirProximaFase(), props.setFase(), props.usuario))
        
    }


    const definirRadiosAtivo = (actualRadios) => {
        radios.forEach(radio => {            
            if(actualRadios != radio.current){
                radio.current.checked = false
            }else{
                radio.current.checked = true
            }
        })
    }

    const numeroDeConvidados = (checkbox) => {
        switch(checkbox){
            case(radio1.current):
                return 50;
            case(radio2.current):
                return 100;
            case(radio3.current):
                return 150;
            case(radio4.current):
                return 200;
            case(radio5.current):
                return 300;
            case(radio6.current):
                return 350
            case(radio7.current):
                return null
        }
    }

    const radiosFromQuantidadeConvidados = (quantidadeConvidados) => {
        switch(quantidadeConvidados){
            case(50):
                return radio1.current;
            case(100):
                return radio2.current;
            case(150):
                return radio3.current;
            case(200):
                return radio4.current;
            case(300):
                return radio5.current;
            case(350):
                return radio6.current
            case(null):
                return radio7.current
        }
    }

    useEffect(() => {
        definirRadiosAtivo(radiosFromQuantidadeConvidados(props.usuario.quantidadeConvidados))
    }, [])

    return(
        <div className={styles.fase6}>
            <div className={styles.fase6_content}>
                <span>Quantos convidados você acha que terá?</span>
            </div>
            <div className={styles.fase6_content_input}>
                <div className={styles.fase6_content2}>
                    <div className={styles.fase6_content_input_container}>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio1} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">0-50</label>
                        </div>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio2} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">51-100</label>
                        </div>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio3} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">101-150</label>
                        </div>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio4} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">151-200</label>
                        </div>
                    </div>
                    <div className={styles.fase6_content_input_container}>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio"  ref={radio5} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">201-300</label>
                        </div>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio6} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">300</label>
                        </div>
                        <div className={styles.fase6_content_input_radio}>
                            <input type="radio" ref={radio7} onInput={(e) => definirRadiosAtivo(e.target)}/>
                            <label htmlFor="">Ainda não temos certeza</label>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.fase6_button} onClick={proximaFase}>Próximo</button>
        </div>
    );

}

export default Fase6;