import React from "react";
import styles from "./Serve.module.css";

const serve = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-md-12 p-0 d-flex justify-content-center align-items-center ">
                <div className={styles.servemain}>
                  <span>We are ready to</span>
                  <h1>SERVE YOU </h1>

                  <a href="https://wa.me/03244240250">REQUEST A QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default serve;
