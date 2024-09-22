import PropTypes from "prop-types";
import styles from "../css/FAQ.module.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`${styles.fAQ} ${className}`}>
      <div className={styles.fAQTitle}>
        <h1 className={styles.perguntasFrequentes}>
          <p className={styles.perguntasFrequentes1}>Perguntas frequentes</p>
        </h1>
        <div className={styles.questionContainers}>
          <div className={styles.questionInnerContainers}>
            <div className={styles.questionWrapper}>
              <div className={styles.questionContent}>
                <div className={styles.oQue}>O que é o bridee?</div>

                <div className={styles.questionOneIcon}>
                  <img
                    className={styles.weuiarrowOutlinedIcon3}
                    alt=""
                    src="/weuiarrowoutlined-3@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.questionTwoContainer}>
              <div 
              
              className={styles.questionTwoContainerInner}>
                <div className={styles.lineDiv} />
                
              </div>
              <div className={styles.questionTwoWrapper}>
                <div className={styles.questionTwoContent}>
                  <div className={styles.quemPodeSe}>Quem pode se cadastrar?</div>
                  <div className={styles.questionTwoIcon}>
                    <div className={styles.iconTwoWrapper}>
                      <div className={styles.weuiarrowOutlined} />
                      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.questionTwoWrapperChild} />
              </div>
            </div>
            <div className={styles.questionThreeContainer}>
              <div className={styles.questionThreeWrapper}>
                <div className={styles.innerQuestionThree}>
                  <div className={styles.questionThreeContent}>
                    <div className={styles.queVantagensO}>
                      Que vantagens o bridee me oferece?
                    </div>
                    <div className={styles.questionThreeIcon}>
                      <div className={styles.weuiarrowOutlined1}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.questionTwoWrapperChild} />
              </div>
            </div>
            <div className={styles.questionFourContainer}>
              <div className={styles.innerQuestionThree}>
                <div className={styles.innerQuestionFour}>
                  <div className={styles.comoPossoMe}>
                    Como posso me cadastrar como assessor na plataforma?
                  </div>
                  <div className={styles.questionFourIcon}>
                    <div className={styles.weuiarrowOutlined1}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.questionFourContainerChild} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
