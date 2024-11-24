import { useEffect, useRef } from "react";
import styles from "./ArcoFinanceiro.module.css"

const ArcoFinanceiro = ({ gasto, total}) => {

  let gaugeValue = (gasto / total) * 100;
  const restante = total - gasto;

  const gastoBar = useRef();
  const restanteBar = useRef();

  const containerStyle = {
    textAlign: "center",
    position: "relative"
  }; 

  useEffect(() => {
    if(gastoBar != undefined && restanteBar != undefined){
      
      let restanteGaugeValue = (restante / total) * 100;
      if(gaugeValue > 100){
        gaugeValue = 100;
      }else if(gaugeValue <= 0){
        gastoBar.current.style.padding = `0`;
      }else{
        gastoBar.current.style.padding = `2%`;
      }
      if(restanteGaugeValue <= 0){
        restanteGaugeValue = 0
        restanteBar.current.style.padding = `0`;
      }else{
        restanteBar.current.style.padding = `2%`;
      }
      gastoBar.current.style.width = `${gaugeValue}%`;
      restanteBar.current.style.width = `${restanteGaugeValue}%`;
    }
  }, [gasto, total])

  return (
    <div style={containerStyle}>
      <div className={styles.arco_financeiro}>
        <div >
          <div className={styles.arco_financeiro_texto} >
            <span>Total Gasto</span>
            <span>R$ {!isNaN(gasto?.toFixed(2)) ? gasto?.toFixed(2) : "---"}</span>
          </div>
          <div className={styles.arco_financeiro_gasto} ref={gastoBar}></div>
        </div>
        <div>
          <div className={styles.arco_financeiro_texto}>
            <span>Restante</span>
            <span>R$ {!isNaN(restante?.toFixed(2)) ? restante?.toFixed(2) : "---"}</span>
          </div>
          <div className={styles.arco_financeiro_gasto} ref={restanteBar}></div>
        </div>
        <div className={styles.arco_financeiro_texto}>
          <span>Orcamento Total</span>
          <span>R$ {!isNaN(total?.toFixed(2)) ? total?.toFixed(2) : "---"}</span>
        </div>
      </div>
    </div>
  );
};

export default ArcoFinanceiro;
