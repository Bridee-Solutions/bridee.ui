import styles from "../pages/Login/Login.module.css";

const LateralImage = ({ tipo }) => {
  return (
    <div>
      {tipo === "assessor" ? (
        <img src="/src/assets/loginimage/image.png" alt="Imagem para Assessor" />
      ) : (
        <img src="/src/assets/foto.svg" alt="Imagem para Casal" />
      )} 
    </div>
  );
};

export default LateralImage;
