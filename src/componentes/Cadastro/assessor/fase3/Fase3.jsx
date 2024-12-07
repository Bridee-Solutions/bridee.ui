import { useRef } from "react";
import styles from "./Fase3.module.css";
import { toast } from "react-toastify";
import {
  componenteFase,
  definirProximaFase,
} from "../../../../pages/Cadastro/fases";
import { request } from "../../../../config/axios/axios";

const Fase3Assessor = (props) => {
  const email = useRef();
  const cnpj = useRef();
  const assessorFieldsResponse = useRef();

  const proximaFase = async () => {
    if (!isFieldsValids()) {
      toast.error("Preencha os campos corretamente");
      return;
    }
    const assessorFields = {
      emailEmpresa: email.current.value,
      cnpj: cnpj.current.value,
    };

    const response = await request
      .verifyAssessorEmpresaEmailAndCnpj(assessorFields)
      .then();
    console.log(response.data);

    if (response.data.emailEmpresaExists) {
      toast.error("E-mail da empresa já cadastrado");
      return;
    }
    if (response.data.cnpjEmpresaExists) {
      toast.error("Já existe uma empresa cadastrada com esse cnpj");
      return;
    }
    props.usuario.emailEmpresa = email.current.value;
    props.usuario.cnpj = cnpj.current.value;
    const proximaFase = definirProximaFase(props.fases);
    const componenteProximaFase = componenteFase(
      proximaFase,
      props.setFase,
      props.usuario
    );
    props.setFase(componenteProximaFase);
  };

  const isFieldsValids = () => {
    return isEmailValid() && isCnpjValid();
  };

  const isEmailValid = () => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(email.current.value) ||
      email.current.value.trim() == ""
    ) {
      email.current.style.borderColor = `red`;
      return false;
    }
    email.current.style.borderColor = `black`;
    return true;
  };

  const isCnpjValid = () => {
    if (cnpj.current.value.length == 18) {
      cnpj.current.value = cnpj.current.value.replaceAll(".", "");
      cnpj.current.value = cnpj.current.value.replaceAll("/", "");
      cnpj.current.value = cnpj.current.value.replaceAll("-", "");
      cnpj.current.style.borderColor = `black`;
      console.log(cnpj.current.value);

      return true;
    }
    cnpj.current.style.borderColor = `red`;
    return false;
  };

  const cnpjMask = (e) => {
    var replacedValue = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !replacedValue[2]
      ? replacedValue[1]
      : replacedValue[1] +
        "." +
        replacedValue[2] +
        "." +
        replacedValue[3] +
        "/" +
        replacedValue[4] +
        (replacedValue[5] ? "-" + replacedValue[5] : "");
    cnpj.current.style.borderColor = `black`;
    if (e.target.value) {
      if (
        e.target.value == "00.000.000/0000-00" ||
        e.target.value == "11.111.111/1111-11" ||
        e.target.value == "22.222.222/2222-22" ||
        e.target.value == "33.333.333/3333-33" ||
        e.target.value == "44.444.444/4444-44" ||
        e.target.value == "55.555.555/5555-55" ||
        e.target.value == "66.666.666/6666-66" ||
        e.target.value == "77.777.777/7777-77" ||
        e.target.value == "88.888.888/8888-88" ||
        e.target.value == "99.999.999/9999-99"
      ) {
        e.target.value = "";
      }
    }
  };

  return (
    <div className={styles.fase3}>
      <div className={styles.fase3_content}>
        <div className={styles.fase3_body}>
          <div className={styles.fase3_body_input}>
            <span className={styles.titulo}>Qual e-mail da sua empresa?</span>
            <input
              type="text"
              placeholder="Email"
              id="email"
              defaultValue={props.usuario.emailEmpresa}
              ref={email}
              onInput={isEmailValid}
            />
          </div>
          <div className={styles.fase3_body_input}>
            <span className={styles.titulo}>Qual o CPNJ da sua empresa?</span>
            <input
              type="text"
              placeholder="CNPJ"
              id="cnpj"
              defaultValue={props.usuario.cnpj}
              ref={cnpj}
              onInput={(e) => cnpjMask(e)}
            />
          </div>
        </div>
        <div className={styles.fase3_button}>
          <button onClick={proximaFase}>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default Fase3Assessor;
