import React from "react";
import styles from "./Servicemain.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Servicemain = () => {
  return (
    <>
      <Header
        page={"Servicemain"}
        heroText={"Our Services"}
        descript={
          "At Mr. Pool, we offer a comprehensive range of services to bring your vision of the perfect pool and outdoor living space to life. Whether you’re dreaming of a brand-new custom pool, refreshing an existing one, or maintaining your oasis, we have the expertise and dedication to deliver exceptional results."
        }
      />

      <main>
        <div className={styles.submain}>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center  ">
              <div className="col-md-12">
                <div className={styles.servicemain}>
                  <div className={styles.serviceheading}>
                    <h1>Elevate Spaces with Expertise</h1>
                  </div>

                  <div className={styles.service}>
                    <div className={styles.serviceheading}>
                      <div className={styles.servicechild}>
                        <div className={styles.checkimg}>
                          <h2>01</h2>
                        </div>
                        <div className={styles.serviceh}>
                          <h5>Services</h5>

                          <p>
                            Pool cleaning,Construction, Repair , Equipment &
                            Accessories{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.service}>
                    <div className={styles.serviceheading}>
                      <div className={styles.servicechild}>
                        <div className={styles.checkimg}>
                          <h2>02</h2>
                        </div>
                        <div className={styles.serviceh}>
                          <h5>Commercial</h5>

                          <p>
                            Filters, pumps & motors, heaters, cleaning
                            equipment, float line starting block, diving boards
                            & competition equipment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceheading}>
                      <div className={styles.servicechild}>
                        <div className={styles.checkimg}>
                          <h2>03</h2>
                        </div>
                        <div className={styles.serviceh}>
                          <h5>POOL EQUIPMENTS</h5>

                          <p>
                            Filters, Pumps & motors, Heaters, Cleaning
                            equipment, Maintenance kits Automatic pool cleaners,
                            Pool covers, Pool ladders & hand rail, Pool
                            chemicals, Pool testing kits, Pool safety equipment,
                            Life guard chair, Pool parts & accessories, Pool
                            floating loungers/recliners, Pool toys & games, Pool
                            slides, Water fitness, Child pool floats & arm
                            floats.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.service}>
                    <div className={styles.serviceheading}>
                      <div className={styles.servicechild}>
                        <div className={styles.checkimg}>
                          <h2>04</h2>
                        </div>
                        <div className={styles.serviceh}>
                          <h5>SPA EQUIPMENT & ACCESSORIES</h5>

                          <p>
                            Vichy showers, Swiss shower, Hot stone heaters & hot
                            stones, Shirodhara equipment (Ayurvedic), Thai
                            herbal compress dumplings, Ear candles, LED showers,
                            LED star ceiling fibre optic lighting effect.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

       
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Servicemain;
