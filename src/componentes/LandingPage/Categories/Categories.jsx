import styles from './Categories.module.css';
import Videography from '../../../assets/foto_video_icon.svg';
import Local from '../../../assets/local_icon.svg';
import Music from '../../../assets/music_icon.svg';
import Cake from '../../../assets/wedding_cake_icon.svg';
import Decoration from '../../../assets/decoration_icon.svg';
import Gastronomy from '../../../assets/gastronomy_icon.svg';
import Bride from '../../../assets/wedding_dress_icon.svg';
import Groom from '../../../assets/wedding_shirt_icon.svg';


function Categories() {
  return (
    <section className={styles.categories}>
    <h1>Descubra fornecedores de casamento por categoria</h1>
    <div className={styles.container}>
      <div>
        <img src={Videography}/>
        <p>Fotos & Vídeo</p>
      </div>

      <div>
        <img src={Local}/>
        <p>Local</p>
      </div>

      <div>
        <img src={Music}/>
        <p>Música</p>
      </div>

      <div>
        <img src={Cake}/>
        <p>Bolo</p>
      </div>

      <div>
        <img src={Decoration}/>
        <p>Decoração</p>
      </div>

      <div>
        <img src={Gastronomy}/>
        <p>Gastronomia</p>
      </div>

      <div>
        <img src={Bride}/>
        <p>Noiva</p>
      </div>

      <div>
        <img src={Groom}/>
        <p>Noivo</p>
      </div>
    </div>   
    </section>
  );
}

export default Categories;