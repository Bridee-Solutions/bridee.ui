import PropTypes from "prop-types";
import styles from "../css/FAQ.module.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`${fAQ} ${className}`}>
      <div className="f-a-q-title">
        <h1 className="perguntas-frequentes">
          <p className="perguntas-frequentes1">Perguntas frequentes</p>
        </h1>
        <div className="question-containers">
          <div className="question-inner-containers">
            <div className="question-wrapper">
              <div className="question-content">
                <div className="o-que">O que é o bridee?</div>

                <div className="question-one-icon">
                  <img
                    className="weuiarrow-outlined-icon3"
                    alt=""
                    src="/weuiarrowoutlined-3@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="question-two-container">
              <div 
              
              className="question-two-container-inner">
                <div className="line-div" />
                
              </div>
              <div className="question-two-wrapper">
                <div className="question-two-content">
                  <div className="quem-pode-se">Quem pode se cadastrar?</div>
                  <div className="question-two-icon">
                    <div className="icon-two-wrapper">
                      <div className="weuiarrow-outlined" />
                      <img className="vector-icon" alt="" src="/vector.svg" />
                    </div>
                  </div>
                </div>
                <div className="question-two-wrapper-child" />
              </div>
            </div>
            <div className="question-three-container">
              <div className="question-three-wrapper">
                <div className="inner-question-three">
                  <div className="question-three-content">
                    <div className="que-vantagens-o">
                      Que vantagens o bridee me oferece?
                    </div>
                    <div className="question-three-icon">
                      <div className="weuiarrow-outlined1">
                        <img
                          className="vector-icon1"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="question-two-wrapper-child" />
              </div>
            </div>
            <div className="question-four-container">
              <div className="inner-question-three">
                <div className="inner-question-four">
                  <div className="como-posso-me">
                    Como posso me cadastrar como assessor na plataforma?
                  </div>
                  <div className="question-four-icon">
                    <div className="weuiarrow-outlined1">
                      <img
                        className="vector-icon2"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="question-four-container-child" />
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
