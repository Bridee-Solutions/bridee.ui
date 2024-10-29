import styles from "./FAQ.module.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "O que é o bridee?",
      content: `A Bridee é uma plataforma digital projetada para ajudar noivos a planejar e organizar o casamento de forma prática e 
            integrada. Nossa ferramenta oferece um espaço completo para gerenciar todos os detalhes, como lista de convidados, confirmações 
            de presença e comunicação com fornecedores, tudo em um só lugar. A Bridee facilita cada etapa do planejamento, permitindo que 
            vocês foquem em aproveitar essa fase tão especial sem o estresse de usar várias ferramentas diferentes. Simplificando o processo, 
            garantimos mais tempo para o que realmente importa: celebrar o amor.`,
    },
    {
      title: "Quem pode se cadastrar?",
      content: "Assesores e casais de noivos.",
    },
    {
      title: "Que vantagens o bridee me oferece?",
      content: `1. Controle de Orçamento - Calculadora financeira para gerenciar os custos com precisão.<br>
                2. Controle de Assentos - Montagem flexível das mesas e lugares para o grande dia.<br>
                3. Confirmação de Presença Online - Convites digitais com QR codes para facilitar a confirmação.<br>
                4. Centralização de Tarefas - Tudo o que vocês precisam em um só lugar, simplificando o planejamento.`,
    },
    {
      title: "Como posso me cadastrar como assessor na plataforma?",
      content: `Para se cadastrar como assessor, navegue até o banner localizado acima destas perguntas e clique em “Comece Agora”. 
                Essa é a única opção para realizar seu cadastro como assessor no site da Bridee. Assim, você terá acesso às ferramentas 
                exclusivas para facilitar o planejamento dos eventos de seus clientes! `,
    }
  ],
};

const style = {
  rowTitleColor: "#000000",
  // rowContentColor: 'grey',
  arrowColor: "#CE8A89",
  rowTitleTextSize: "1.1rem",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true
};

function FAQ() {
  return (
    <section className={styles.faq}>
    <div className={styles.container}>
    <div className={styles.title}>
    <h1>Perguntas frequentes</h1>
    </div>
    <div className={styles.content}>
    <Faq
    data={data}
    styles={style}
    config={config}
    />
    </div>
    </div>
    </section>
  );
}

export default FAQ;