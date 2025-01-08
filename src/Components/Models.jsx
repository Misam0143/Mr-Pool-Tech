import React from "react";
import styles from "../Components/Models.module.css";
import model1 from "../assets/icons/Layer_1.png";
import model2 from "../assets/icons/Frame.png";
import model3 from "../assets/icons/kidney.png";
import model4 from "../assets/icons/23-Vector Graphic.png";
import olympia from "../assets/images/olympia.jpg";
import claremont from "../assets/images/claremont.jpg";
import jamaica from "../assets/images/jamaica.jpg";

const Models = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12 p-0">
                <div className={styles.modelmain}>
                  <h1>Pool Models</h1>

                  <div className={styles.modelchunks}>
                    <div className={styles.rectangle}>
                      <img src={model1} alt="Model 2" />
                      <p>RECTANGLE</p>
                    </div>
                    <div className={styles.rectangle}>
                      <img src={model2} alt="Model 2" />
                      <p>CLASSIC</p>
                    </div>

                    <div className={styles.rectangle}>
                      <img src={model3} alt="Model 2" />
                      <p>KIDNEY</p>
                    </div>
                    <div className={styles.rectangle}>
                      <img src={model4} alt="Model 2" />
                      <p>CUSTOM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center flex-wrap">
              {/* Olympia Card */}
              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className={styles.olympiamain}>
                  <div className={styles.olympiaimg}>
                    <img src={olympia} alt="Olympia" className="img-fluid" />
                  </div>
                  <h1>Olympia</h1>
                  <p>DEPTH: 3’-6’ to 7’</p>

                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className={styles.olympiamain}>
                  <div className={styles.olympiaimg}>
                    <img
                      src={claremont}
                      alt="Claremont"
                      className="img-fluid"
                    />
                  </div>
                  <h1>Claremont</h1>
                  <p>DEPTH: 3’-4’ to 8’</p>
                 
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className={styles.olympiamain}>
                  <div className={styles.olympiaimg}>
                    <img src={jamaica} alt="Jamaica" className="img-fluid" />
                  </div>
                  <h1>Jamaica</h1>
                  <p>DEPTH: 2’-7’ to 9’</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Models;
