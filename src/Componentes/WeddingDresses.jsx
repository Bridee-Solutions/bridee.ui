import React from 'react';
import styles from '../css/WeddingDresses.module.css'

function WeddingDresses() {
  return (
    <section className={styles.wedding_dresses}>
      <div className={styles.content_wrapper}>
        <div className={styles.text_content}>
          <h2 className={styles.section_title}>Explore nossa seleção de vestidos de noiva</h2>
          <p className={styles.section_description}>Desde o clássico ao moderno, temos o vestido ideal para você.</p>
          <button className={styles.search_button}>
            Buscar vestidos
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eaf413b48e8124ecaebc5478cddce8d411c2d1ad814119a290cd2122bc6c76f?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className={styles.arrow_icon} />
          </button>
        </div>
        <div className={styles.image_gallery}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ca4084c114637394f2f99da1633795ed5802ecd722726a618bbb7090dce016b?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="Vestido de noiva" className={styles.main_image} />
          <div className={styles.side_images}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ce4737148b82c28556e589ee425ec944c3fb19ff173ff82ebcc01702a1834a?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="Detalhes do vestido" className={styles.side_image} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ae47de9db123088ac984d27f9be3adb40b49a9c49474f62464a14833eac83d3?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="Acessórios de noiva" className={styles.side_image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingDresses;