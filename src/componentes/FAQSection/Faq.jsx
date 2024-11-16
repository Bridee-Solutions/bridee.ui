import styles from "../FAQSection/faq.module.css"; // Corrigido
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";

function FAQSection({ assessor, selectedCard, perfilGeral }) {
  console.log("faq foi renderizadaaaaaaaaaaaaaaaaaaaaaa");
  const navigate = useNavigate();

  const perfil = assessor || perfilGeral;
  if (!perfil) {
    navigate('/404');
    return null;
  }

  useEffect(() => {
    console.log(selectedCard);
    
    console.log(selectedCard["visaoGeral"]);
  }, [])

  const defineTamanhoCasamento = () => {
    const textos = ["Com menos de 100 convidados", "Entre 100 e 300 convidados",
          "Entre 300 e 500 convidados", "Mais de 500 convidados"]
    const qtdConvidados = selectedCard["qtdConvidados"];
    if(qtdConvidados == "0-100"){
      return [textos[0]];
    }else if(qtdConvidados == "101-300"){
      return [textos[0], textos[1]];
    }else if(qtdConvidados == "301-500"){
      return [textos[0], textos[1], textos[2]];
    }else if(qtdConvidados == "500+"){
      return textos
    }
  }

  const sections = [
    ...(assessor
      ? [
        {
          titulo: "Visão geral",
          descricao: selectedCard["visaoGeral"] || "Descrição não disponível",
        },
          {
            titulo: "Serviços oferecidos",
            descricao: selectedCard["servicosFornecidos"] || "Forma de serviço não disponível",
          },
          {
            titulo: "Forma de trabalho",
            descricao: selectedCard["formaDeTrabalho"] || "Forma de trabalho não disponível",
          },
        ]
      : [
          {
            titulo: "Informações gerais",
            descricao: selectedCard["visaoGeral"] || "Informações gerais não disponíveis",
          },
        ]),
    {
      titulo: "Perguntas Frequentes",
      questions: [{
        pergunta: "Forma de trabalho",
        mostrarIconeCheck: false,
        respostas: [
          selectedCard["formaDeTrabalho"]
        ]
      },
      {
        pergunta: "Organiza casamentos de religiões não católicas?",
        mostrarIconeCheck: false,
        respostas: [
          selectedCard["isCasamentoCatolico"] ? "Sim" : "Não"
        ]
      },
      {
        pergunta: "Quais são as formas de pagamento?",
        mostrarIconeCheck: true,
        respostas: selectedCard["formasPagamento"].map(forma => {
          if(forma.toUpperCase() == "CARTÃO DE CRÉDITO"){
            return "Cartão de crédito"
          }else if(forma.toUpperCase() == "CARTÃO DE DÉBITO"){
            return "Débito"
          }else if(forma.toUpperCase() == "CHEQUE"){
            return "Cheque"
          }else if(forma.toUpperCase() == "DINHEIRO"){
            return "Dinheiro"
          }
        })
      },
    {
      pergunta: "Em que tipo de casamentos está especializado?",
      mostrarIconeCheck: true,
      respostas: selectedCard["tiposCasamento"]
    },
    {
      pergunta: "Quais são os tamanhos dos casamentos para os quais trabalha?",
      mostrarIconeCheck: true,
      respostas: ["Com menos de 100 convidados", "Entre 100 e 300 convidados",
        "Entre 300 e 500 convidados", "Mais de 500 convidados"]
    }
    ]
    },
  ];

  

  return (
    <div className={styles.containerApresent}>
      <div className={styles.containerTitulo}>
        <div className={styles.nome}>
          <span>{selectedCard.nome}</span>
        </div>
        <div className={styles.containerSubt}>
          <div className={styles.subtitulo}>
            <div className={styles.iconContainer}>
              <FaMapMarkerAlt className={styles.icon} />
            </div>
            <div className={styles.lugar}>
              <span>{selectedCard.cidade}, </span>
              <span>{selectedCard.bairro}</span>
            </div>
          </div>
          <div className={styles.website}>
            <div className={styles.iconContainer}>
              <FaGlobe className={styles.icon} />
            </div>
            <div className={styles.lugar}>
              <a href={selectedCard.website} target="_blank">
                <span>Visitar website</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={styles.content}>
          <div className={styles.tituloApr}>
            <span>{section.titulo}</span>
          </div>
          {section.descricao && (
            <div className={styles.containerDescricao}>
              <div className={styles.descricao}>
                <span>{section.descricao}</span>
              </div>
            </div>
          )}
          {section.questions && (
            <div className={styles.containerQuestions}>
              <div className={styles.questions}>
                {section.questions?.map((questionItem, qIndex) => (
                  <div key={qIndex} className={styles.question}>
                    <div className={styles.titulo}>
                      <span>{questionItem.pergunta}</span>
                    </div>
                    <div className={styles.answers}>
                      {questionItem.respostas?.map(
                        (
                          answer,
                          aIndex 
                        ) => (
                          <div key={aIndex} className={styles.answer}>
                            {questionItem.mostrarIconeCheck ? ( 
                              <FaCheck className={styles.checkIcon} />
                            ) : null}
                            <span>{answer}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
