import styles from "../FAQSection/faq.module.css"; // Corrigido
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

function FAQSection({ assessor, selectedCard, perfilGeral }) {
  console.log("faq foi renderizadaaaaaaaaaaaaaaaaaaaaaa");
  const navigate = useNavigate();

  const perfil = assessor || perfilGeral;
  if (!perfil) {
    navigate('/404');
    return null;
  }


  const sections = [
    
    ...(assessor
      ? [
        {
          titulo: "Visão geral",
          descricao: perfil.descricaoAssessor || perfil.descricao || "Descrição não disponível",
        },
          {
            titulo: "Serviços oferecidos",
            descricao: perfil.servicos || "Forma de serviço não disponível",
          },
          {
            titulo: "Forma de trabalho",
            descricao: perfil.formaTrabalho || "Forma de trabalho não disponível",
          },
        ]
      : [
          {
            titulo: "Informações gerais",
            descricao: perfil.informacoesGerais || "Informações gerais não disponíveis",
          },
        ]),
    {
      titulo: "Perguntas Frequentes",
      questions: perfil.perguntasFrequentes || [],
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
                {section.questions.map((questionItem, qIndex) => (
                  <div key={qIndex} className={styles.question}>
                    <div className={styles.titulo}>
                      <span>{questionItem.pergunta}</span>
                    </div>
                    <div className={styles.answers}>
                      {questionItem.respostas.map(
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
