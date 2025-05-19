import styles from "../../pages/Calculadora/Calculadora.module.css";
import stylesCalc from "../CategoriaCalculadora/CategoriaCalculadora.module.css";
import "./CategoriaCalculadora.module.css";
import "../../index.css";
import add from "../../assets/calculadora/add.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import {
  faChevronDown,
  faChevronUp,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { request } from "../../config/axios/axios";
import { CasalContext } from "../../context/CasalContext";

function CategoriaCalc({
  categoria,
  catIndex,
  toggleCategoria,
  categorias,
  setCategorias,
  itensOrcamentoRequest
}) {

  // Estado para controlar se houve modificação
  const [isModified, setIsModified] = useState(false);
  const [category, setCategory] = useState(categoria)
  const [isCategoriaModified, setIsCategoriaModified] = useState(false);

  const adicionarItem = () => {
    category.custos.push({
      id: null,
      nome: "Novo item",
      precoAtual: 0,
    });
    setIsModified(true)
    setCategorias({...categorias})    
  };

  function removerItem(itemIndex) {;
    const custoRemovido = category.custos.splice(itemIndex, 1);
    if(custoRemovido[0].id != undefined){    
      request.deleteCusto(custoRemovido[0].id)
    }
    setCategorias({...categorias})
  }

 const removerCategoria = (index) => {
  const itemRemovido = category.itemOrcamentos.splice(index, 1);
  if(itemRemovido[0].id != undefined){    
    request.deleteItemOrcamento(itemRemovido[0].id)
  }
  setCategorias({...categorias})   
};  

  const handleCategoriaNomeChange = (e) => {
    category.tipo = e.target.value;
    setIsCategoriaModified(true);
    setCategorias({...categorias})
  };

  // Função para verificar alterações nos campos de entrada
  const handleModifiedChange = (item, value) => {
    item.precoAtual = Number(value)
    setIsModified(true)
    setCategorias({...categorias})
  };

  const handleTituloModifiedChange = (item, value) => {
    item.nome = value;    
    setIsModified(true)
    setCategorias({...categorias})
  };

  const salvarAlteracoes = () => {
    setIsModified(false);
    setIsCategoriaModified(false)
    request.saveItensOrcamentos(itensOrcamentoRequest).then(response => {
      const item = {...response.data[0], aberta: true, icon: categoria.icon}
      setCategory(item)
    })
  };

  useEffect(() => {
    itensOrcamentoRequest = [{
      id: category.id,
      tipo: category.tipo,
      custos: category.custos?.map(custo => {
        return {
          id: custo.id,
          nome: custo.nome,
          precoAtual: custo.precoAtual
        }
      })
    }]
    
  }, [categorias])

  return (
    <div className={stylesCalc.categoria}>
      <div className={stylesCalc.cabecalhoCategoria}>
        <div className={stylesCalc.containerCat}>
          <div className={stylesCalc.direita}>
            <button
              className={stylesCalc.setaCategoria}
              onClick={() => toggleCategoria(category)}
            >
              {category.aberta ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>

            <div className={stylesCalc.iconeCategoria}>
              <img src={category.icon} alt="Ícone da Categoria" />
            </div>

            <div className={stylesCalc.categoriaNome}>
                <input
                  type="text"
                  defaultValue={category.tipo}
                  readOnly={category.default}
                  onChange={handleCategoriaNomeChange}
                  className={`${stylesCalc.inputTitulo}`}
                />
            </div>
          </div>

          <div className={stylesCalc.lixo}>
            <FontAwesomeIcon
              icon={faTrash}
              className={stylesCalc.iconeLixeira}
              onClick={() => removerCategoria(catIndex)}
            />
          </div>
        </div>
        {category.aberta && (
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

      {category.aberta && (
        <>
          {category.custos?.map((item, itemIndex) => (
            <div key={`item-${itemIndex}`} className={stylesCalc.item}>
              <div className={stylesCalc.containerItem}>
                <div className={stylesCalc.itemEsquerda}>
                    <input
                      type="text"
                      maxLength={42}
                      defaultValue={item.nome}
                      onChange={(e) =>
                        handleTituloModifiedChange(item, e.target.value)
                      }
                      className={`${stylesCalc.inputTitulo} ${stylesCalc.titulo}`}
                    />
                </div>

                <div className={stylesCalc.inputBox}>
                  <div className={stylesCalc.containerDinheiro}>
                    <span>R$</span>
                      <input
                        className={`${stylesCalc.inputBoxEdit} ${stylesCalc.inputCusto}`}
                        defaultValue={item.precoAtual}
                        maxLength={8}
                        type="number"
                        onChange={(e) =>
                          handleModifiedChange(item, e.target.value)
                        }
                      />
                  </div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={stylesCalc.iconeLixeira}
                    onClick={() => removerItem(itemIndex)}
                  />
                </div>
              </div>
            </div>
          ))}

          <div
            className={stylesCalc.adicionarItem}
            onClick={() => adicionarItem()}
          >
            <img src={add} alt="Adicionar item" />
            <span>Adicionar item</span>
          </div>
        </>
      )}


{category.aberta && ( 
      <div className={stylesCalc.salvar}>
        {(isModified || isCategoriaModified) && (
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

export default CategoriaCalc;
