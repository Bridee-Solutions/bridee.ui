import React from 'react';
import styles from '../css/Benefits.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight);

function Benefits() {
  return (
    <section className={styles.benefits}>
    
    <div className={styles.start_label}>
    <p>Planeje seu casamento de <br/> forma simples e prática com <br/> a bridee.</p>
    <button>
    Comece agora 
    <FontAwesomeIcon icon={faChevronRight} />      
    </button>
    </div>
    
    <div className={styles.benefits_labels}>
    <div className={styles.icon_benefits_loupe}></div>
    <p><b>Calcule</b> os custos do seu casamento conforme suas escolhas.</p>
    </div>
    
    <div className={styles.benefits_labels}>
    <div className={styles.icon_benefits_networking}></div>
    <p>Encontre os melhores <b>assessores</b> para o seu grande dia.</p>
    </div>
    
    <div className={styles.benefits_labels}>
    <div className={styles.icon_benefits_tasklist}></div>
    <p>Gerencie e <b>confirme</b> presenças facilmente.</p>
    </div>
    
    <div className={styles.benefits_labels}>
    <div className={styles.icon_benefits_pinterest}></div>
    <p>Importe inspirações do <b>Pinterest</b> para o seu planejamento.</p>
    </div>
    
    </section>
  );
}

export default Benefits;