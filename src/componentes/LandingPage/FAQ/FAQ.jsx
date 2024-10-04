import styles from "./FAQ.module.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "O que é o bridee?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Quem pode se cadastrar?",
      content:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Que vantagens o bridee me oferece?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Como posso me cadastrar como assessor na plataforma?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    }
  ],
};

const style = {
  rowTitleColor: "#000000",
  // rowContentColor: 'grey',
  arrowColor: "#CE8A89",
  rowTitleTextSize: "24px",
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