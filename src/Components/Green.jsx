import React from "react";
import styles from "../Components/Green.module.css";

const Green = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-md-12 p-0 ">
                <div className={styles.greenmain}>
                  <div className={styles.greentxt}>
                    <div className={styles.greenchild}>
                      <div className={styles.greensubchild}>
                        <h6>ECO FRIENDLY</h6>
                      </div>
                    </div>

                    <h1>Green Pool Cleaning</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Green;
