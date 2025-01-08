import React from "react";
import styles from "./Builders.module.css";
import builder1 from "../assets/images/builder1.jpg";
import builder2 from "../assets/images/builder2.jpg";
import builder3 from "../assets/images/builder3.jpg";
import { Link } from "react-router-dom";

export const Builders = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <section>
            <div className="container-fluid  ">
              <div className="row pt-5 d-flex justify-content-center align-items-center ">
                <div className="col-md-12 p-0 ">
                  <div className={styles.buildermain}>
                    <div className={styles.photos}>
                      <div className={styles.subphoto}>
                        <p>WE BUILD THE BEST POOLS</p>
                      </div>
                    </div>

                    <h1>
                      We Are Swimming Pool Builders and Swimming Pool Service
                      Experts
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row mt-5  d-flex justify-content-center align-items-start ">
                <div className="col-md-5 p-0">
                  <div className={styles.builderChunk}>
                    <div className={styles.builder1Img}>
                      <img src={builder1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 p-0  d-flex justify-content-center align-items-center ">
                  <div className={styles.buildertxt}>
                    <p>
                      Many health clubs, fitness centers and private clubs, such
                      as the YMCA, have pools used mostly for exercise or
                      recreation. Many towns and cities provide public pools.
                      Many hotels have pools available for their guests to use
                      at their leisure. Educational facilities such as
                      universities typically have pools for physical education
                      classes, recreational activities, leisure or competitive
                      athletics such as swimming teams.
                    </p>

                    <div className={styles.builderchunk1}>
                      <div className={styles.builderImg1}>
                        <img src={builder2} alt="" />
                      </div>
                      <div className={styles.builderImg1}>
                        <img src={builder3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.aboutbtnmain}>
                  <Link to="/AboutUs" className="nav-link">
                    <button className={styles.aboutbtn}>
                      MORE ABOUT COMPANY{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Builders;
