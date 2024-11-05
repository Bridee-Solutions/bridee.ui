import styles from "../FAQSection/faq.module.css"; // Corrigido


const sections = [
    {
      title: "Visão geral",
      description:
        "Cada evento tratado como único e com a merecida e desejada atenção. Esta é a fórmula aplicada pela Ágila Paula Assessoria & Cerimonial em cada casamento realizado e que vem encantando seus clientes. Alinhando o carinho ao projeto dos noivos, esta profissional e equipe vêm contribuindo para o sucesso do grande dia."
    },
    {
      title: "Serviços oferecidos",
      description:
        "Os serviços abrangem consultoria para casamentos e assessoria completa. Não utilizamos um assessor só do dia. As ações são desenvolvidas e coordenadas com criatividade, profissionalismo e eficácia. O atendimento é feito de acordo com as necessidades e preferências do cliente."
    },
    {
      title: "Forma de trabalho",
      description:
        "A empresa Ágila Paula Assessoria e Cerimonial se destaca pelo trabalho de uma equipe experiente e motivada, buscando atender e satisfazer as expectativas dos públicos mais exigentes."
    },
    {
      title: "Perguntas Frequentes",
      questions: [
        {
          question: "Quais são os tamanhos dos casamentos para os quais trabalha?",
          answers: [
            "Com menos de 100 convidados",
            "Entre 100 e 300 convidados",
            "Entre 300 e 500 convidados",
            "Mais de 500 convidados"
          ]
        },
        {
          question: "Que tipo de cerimônia organiza?",
          answers: [
            "Religiosa",
            "Civil",
            "Ao ar livre",
            "Simbolica",
            "Temática",
            "Ecológica",
            "Outro (Nível da Assessoria de Casamentos Ágila Paula, com capacitação para realizar qualquer tipo de cerimônia)"
          ]
        },
        {
          question: "Organiza casamentos de religiões não católicas?",
          answers: ["Sim"]
        },
        {
          question: "Em que tipo de casamento está especializado?",
          answers: [
            "Estilo americano, evangélico, espírita, católico e budista"
          ]
        },
        {
          question: "Como é o seu estilo de trabalho?",
          answers: [
            "Organizado, planejado e pontual"
          ]
        },
        {
          question: "Quais são as formas de pagamento?",
          answers: [
            "Dinheiro, cheque ou depósito"
          ]
        }
      ]
    }
  ];
  
  

function FAQSection() {
    console.log("FAQSection foi renderizado");
    return (
      <div className={styles.containerApresent}>
        {sections.map((section, index) => (
          <div key={index} className={styles.content}>
            <div className={styles.tituloApr}>
              <span>{section.title}</span>
            </div>
            {section.description && (
              <div className={styles.descricao}>
                <span>{section.description}</span>
              </div>
            )}
            {section.questions && (
              <div className={styles.questions}>
                {section.questions.map((questionItem, qIndex) => (
                  <div key={qIndex} className={styles.question}>
                    <span>{questionItem.question}</span>
                    <div className={styles.answers}>
                      {questionItem.answers.map((answer, aIndex) => (
                        <div key={aIndex} className={styles.answer}>
                          <span>{answer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

export default FAQSection;