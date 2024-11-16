import moda from "../../assets/calculadora/modabeleza.svg";
import aliancas from "../../assets/calculadora/aliancas.svg";
import etiqueta from "../../assets/calculadora/etiqueta.svg";
import transporte from "../../assets/calculadora/transporteacomodacao.svg";
import entretenimento from "../../assets/calculadora/entretenimentocalc.svg";
import decoracao from "../../assets/calculadora/decoracaocalculadora.svg";

const itensDefault = [
    {
      tipo: "Moda e beleza",
      icon: moda,
      custos: [],
      aberta: true,
      default: true
    },
    {
      tipo: "Alianças de casamento",
      icon: aliancas,
      custos: [],
      aberta: true,
      default: true
    },
    {
      tipo: "Decoração",
      icon: decoracao,
      custos: [],
      aberta: true,
      default: true
    },
    {
      tipo: "Transporte e Acomodação",
      icon: transporte,
      custos: [],
      aberta: true,
      default: true
    },
    {
      tipo: "Entretenimento",
      icon: entretenimento,
      custos: [],
      aberta: true,
      default: true
    },
]

export const buildItemOrcamentos = (data) => {
    if(data.itemOrcamentos.length > 0){
        const itensOrcamento = data.itemOrcamentos.map(item => {
          return {...item, aberta: true, icon: decoracao};
        })
        return data.itemOrcamentos = itensOrcamento
      }else{
        return data.itemOrcamentos = itensDefault;
      }
};