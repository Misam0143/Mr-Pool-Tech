import React from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-10 p-0  d-flex justify-content-center align-items-center  ">
                <div className={styles.serviceheading}>
                  <h1>Our Services</h1>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center  ">
              <div className={styles.mainicons}>
                <div className={styles.sicon}>
                  <div className={styles.newpool}>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/wired/64/outdoor-swimming-pool.png"
                      alt="outdoor-swimming-pool"
                    />
                    <p>NEW POOLS</p>
                  </div>
                </div>
                

                <div className={styles.sicon}>
                  <div className={styles.newpool}>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/dotty/80/maintenance.png"
                      alt="maintenance"
                    />
                    <p>REPAIR</p>
                  </div>
                </div>


                <div className={styles.sicon}>
                  <div className={styles.newpool}>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/carbon-copy/100/mask-snorkel.png"
                      alt="mask-snorkel"
                    />
                    <p>PRODUCTS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-5 d-flex justify-content-center align-items-center text-center ">
              <div className="col-md-4 ">
                <div className={styles.stxt1}>
                  <p>
                    Experience expert swimming pool construction, delivering
                    quality designs preferences. Transform your backyard with a
                    modern or classic pool, built using advanced
                    durability.Trust our skilled team to create your dream pool
                    with a hassle-free process.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className={styles.stxt2}>
                  <p>
                    Offering professional swimming pool repair services to
                    restore your pool’s functionality and appearance. Our
                    skilled team specializes in fixing leaks, cracks, and
                    equipment issues using advanced techniques and durable
                    materials. Ensure your pool is safe, efficient, and ready
                    for use with our reliable solutions. Trust us to handle all
                    repairs with precision and care.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.stxt3}>
                  <p>
                    Providing exceptional swimming pool remodeling services to
                    revitalize your outdoor space. Our experts specialize in
                    upgrading designs, enhancing features, and restoring the
                    beauty of your pool. Using modern techniques and premium
                    materials.Transform your pool into a stunning and functional
                    retreat with our reliable remodeling expertise.
                  </p>
                </div>
              </div>

              <Link to="/Servicemain" className="nav-link">
                <button className={styles.servicebtn}>MORE SERVICES</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
