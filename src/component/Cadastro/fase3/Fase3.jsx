import { useEffect } from "react";
import styles from "./Fase3.module.css"

const Fase3 = () => {

    const checkSimCheckbox = () => {
        var simCheckbox = document.getElementById("sim");
        var naoCheckbox = document.getElementById("nao");
        simCheckbox.checked = true
        naoCheckbox.checked = false
    }

    const checkNaoCheckBox = () => {
        var simCheckbox = document.getElementById("sim");
        var naoCheckbox = document.getElementById("nao");
        simCheckbox.checked = false
        naoCheckbox.checked = true
    }

    return(
        <div className={styles.fase2}>
            <span>Você já reservou um local?</span>
            <div className={styles.fase2_checkbox}>
                <div className={styles.fase2_checkbox_input}>
                    <input type="checkbox" id="sim" onInput={checkSimCheckbox}/>
                    <label htmlFor="sim">Sim</label>
                </div>
                <div className={styles.fase2_checkbox_input}>
                    <input type="checkbox" id="nao" onInput={checkNaoCheckBox}/>
                    <label htmlFor="nao">Não</label>
                </div>
            </div>
            <div className={styles.fase2_input}>
                <div className={styles.fase2_input_span}>
                    <span>Ótimo, vamos adicionar ao seu plano</span>
                </div>
                <input type="text" />
            </div>
            <button className={styles.fase2_button}>Próximo</button>
        </div>
    );

}

export default Fase3;