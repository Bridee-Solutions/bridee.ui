import styles from "../pages/Login/Login.module.css";
import assessorLateralImage from "/src/assets/loginimage/image.png"
import casalLateralImage from "/src/assets/login/foto.svg"

const LateralImage = ({ tipo }) => {
  return (
    <div>
      {tipo === "assessor" ? (
        <img src={assessorLateralImage} alt="Imagem para Assessor" />
      ) : (
        <img src={casalLateralImage} alt="Imagem para Casal" />
      )} 
    </div>
  );
};

export default LateralImage;
