import styles from "../../pages/Calculadora/Calculadora.module.css";
import stylesCalc from "../CategoriaCalculadora/CategoriaCalculadora.module.css";
import "./FornecedorCalculadora.module.css";
import "../../index.css";
import add from "../../assets/calculadora/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import aliancas from "../../assets/calculadora/aliancas.svg";


import {
  faChevronDown,
  faChevronUp,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { request } from "../../config/axios/axios";
import { CasalContext } from "../../context/CasalContext";

function FornecedorCalc({
  categoria,
  toggleCategoria,
  setCategorias,
  categorias,
  orcamentoFornecedorRequest
}) {

  const [isModified, setIsModified] = useState(false);
  const {casamentoId} = useContext(CasalContext);

  const handleModifiedChange = (item, value) => {
    item.preco = Number(value)
    setIsModified(true)
    setCategorias({...categorias})
  };

  const salvarAlteracoes = () => {
    setIsModified(false);
    console.log(orcamentoFornecedorRequest);
    
    request.saveOrcamentoFornecedores(orcamentoFornecedorRequest)
  };

  useEffect(() => {
    orcamentoFornecedorRequest = categorias.orcamentoFornecedores?.map((orcamentoFornecedor => {
      return {
        id: orcamentoFornecedor.id,
        preco: Number(orcamentoFornecedor.preco),
        fornecedorId: orcamentoFornecedor.fornecedor.id,
        casamentoId: casamentoId
      }
    }))    
  }, [categorias])

  return (
    <div className={stylesCalc.categoria}>
      <div className={stylesCalc.cabecalhoCategoria}>
        <div className={stylesCalc.containerCat}>
          <div className={stylesCalc.direita}>
            <button
              className={stylesCalc.setaCategoria}
              onClick={() => toggleCategoria(categoria)}
            >
              {categoria.aberta ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>

            <div className={stylesCalc.iconeCategoria}>
              <img src={aliancas} alt="Ícone da Categoria" />
            </div>

            <div className={stylesCalc.categoriaNome}>
                <input
                  type="text"
                  value={"Fornecedores"}
                  className={`${stylesCalc.inputTitulo}`}
                />
            </div>
          </div>
        </div>
        {categoria.aberta && (
          <div className={stylesCalc.containerLegenda}>
            <div>
              <span>Titulo</span>
            </div>
            <div className={stylesCalc.custototal}>
              <span>Custo total</span>
            </div>
          </div>
        )}
      </div>

      {categoria.aberta && (
        <>
          {categoria?.map((item, itemIndex) => (
            <div key={`item-${itemIndex}`} className={stylesCalc.item}>
              <div className={stylesCalc.containerItem}>
                <div className={stylesCalc.itemEsquerda}>
                    <input
                      type="text"
                      maxLength={42}
                      value={item.fornecedor.subcategoriaServico.nome}
                      className={`${stylesCalc.inputTitulo} ${stylesCalc.titulo}`}
                    />
                </div>

                <div className={stylesCalc.inputBox}>
                  <div className={stylesCalc.containerDinheiro}>
                    <span>R$</span>
                      <input
                        className={`${stylesCalc.inputBoxEdit} ${stylesCalc.inputCusto}`}
                        defaultValue={item.preco }
                        maxLength={8}
                        type="number"
                        onChange={(e) =>
                          handleModifiedChange(item, e.target.value)
                        }
                      />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}


{categoria.aberta && ( 
      <div className={stylesCalc.salvar}>
        {(isModified) && (
          <button
            className={stylesCalc.buttonSaveChanges}
            onClick={salvarAlteracoes}
          >
            <FontAwesomeIcon icon={faCheck} className={styles.iconExport} />{" "}
            Salvar alterações
          </button>
        )}
      </div>
      )}
    </div>
  );
}

export default FornecedorCalc;
