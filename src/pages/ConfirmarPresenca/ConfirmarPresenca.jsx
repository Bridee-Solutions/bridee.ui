import React, { useEffect, useState } from "react";
import styles from "./ConfirmarPresenca.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

function ConfirmarPresenca() {
  const [step, setStep] = useState(0);
  const [pin, setPin] = useState("");
  const [errorPin, setErrorPin] = useState(false);
  const [buttonLoad, setButtonLoad] = useState(false);
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    setGuests([
      { id: 1, nameGuest: "Amanda", isAttending: false },
      { id: 2, nameGuest: "Ian", isAttending: false },
      { id: 3, nameGuest: "Beatriz", isAttending: false },
      { id: 4, nameGuest: "Giovanna", isAttending: false },
      { id: 5, nameGuest: "Giovanna", isAttending: false },
      { id: 6, nameGuest: "Giovanna", isAttending: false },
    ]);
  }, []);

  const saveAttendingGuests = async () => {
    setButtonLoad(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(guests);
    setStep(2);

    setButtonLoad(false);
  };

  const handleConfirmGuest = (v, guest) => {
    setGuests((prevGuests) =>
      prevGuests.map((prevGuest) =>
        prevGuest.id === guest.id
          ? {
              ...prevGuest,
              isAttending: v !== prevGuest.isAttending ? v : null,
            }
          : prevGuest
      )
    );
  };

  const validatePin = async () => {
    setButtonLoad(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (pin === "GOBR") {
      setStep((prev) => prev + 1);
    } else {
      setErrorPin(true);
      setTimeout(() => setErrorPin(false), 6000);
    }

    setButtonLoad(false);
  };

  const stepConfirm = () => {
    switch (step) {
      case 1:
        return (
          <div key={1} className={styles.form_confirm}>
            <div className={styles.form}>
              <div className={styles.title_description}>
                <p className={styles.title_confirm}>Quem vai?</p>
                <span className={styles.description_confirm}>
                  Isso ajudará Amanda & Enzo a organizar melhor o grande dia.
                  Você pode mudar sua resposta sempre que precisar.
                </span>
              </div>
              <div className={styles.guest_list}>
                {Array.isArray(guests) &&
                  guests.map((guest, index) => (
                    <div key={index} className={styles.row_guest}>
                      <span>{guest.nameGuest}</span>
                      <div className={styles.attending_buttons_container}>
                        <button
                          onClick={() => handleConfirmGuest(true, guest)}
                          className={
                            guest.isAttending === true
                              ? styles.selected_attending
                              : ""
                          }
                        >
                          Confirmar presença
                        </button>
                        <button
                          onClick={() => handleConfirmGuest(false, guest)}
                          className={
                            guest.isAttending === false
                              ? styles.selected_attending
                              : ""
                          }
                        >
                          Não irá comparecer
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <button
              className={styles.proceed_button}
              onClick={() => saveAttendingGuests()}
            >
              <span>Continuar</span>
              <FontAwesomeIcon
                className={buttonLoad ? styles.loading : ""}
                icon={buttonLoad ? faSpinner : faArrowRight}
              />
            </button>
          </div>
        );

      case 2:
        return (
          <div key={2} className={styles.form_confirm}>
            <div className={styles.form}>
              <p className={styles.title_confirm_final}>
                Amanda & Enzo <br />
                agradecem sua resposta!
              </p>
              <span className={styles.description_confirm}>
                Você pode mudar sua resposta sempre que precisar.
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div key={0} className={styles.form_confirm}>
            <div className={styles.form}>
              <div className={styles.title_description}>
                <p className={styles.title_confirm}>
                  Insira o pin ou nome do convite
                </p>
                <span className={styles.description_confirm}>
                  Você pode informar o nome do convite ou o PIN enviado por
                  Amanda & Enzo.
                </span>
              </div>
              <div className={styles.input_container}>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setPin(e.target.value)}
                    value={pin}
                    placeholder="Identificação do convite"
                  />
                </div>
                {errorPin && (
                  <span className={styles.error_message}>
                    Convite não encontrado. Verifique se o nome do convite
                    informado está correto.
                  </span>
                )}
              </div>
            </div>
            <button
              className={styles.proceed_button}
              onClick={() => validatePin()}
            >
              <span>Continuar</span>
              <FontAwesomeIcon
                className={buttonLoad ? styles.loading : ""}
                icon={buttonLoad ? faSpinner : faArrowRight}
              />
            </button>
          </div>
        );
    }
  };
  return <div className={styles.container}>{stepConfirm()}</div>;
}

export default ConfirmarPresenca;
