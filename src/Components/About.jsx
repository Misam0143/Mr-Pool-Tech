import React from "react";
import styles from "./About.module.css";
import AboutImg from "../assets/images/aboutImg.jpg";
import MissionImg from "../assets/images/olympia.jpg";
import Header from "./Header";
import Footer from "./Footer";
import HeadIcon from "../assets/icons/checkbox.png";
import Check from "../assets/icons/checkbox.png";

const AboutUs = () => {
  return (
    <>
      <Header
        page={"about"}
        heroText={"About Us"}
        descript={
          "Welcome to the Our Projects page, where we proudly highlight our dedication to creating exceptional pools that blend elegance, functionality, and superior craftsmanship. Each project reflects our commitment to delivering outstanding results and exceeding customer expectations."
        }
      />

      <main>
        <div className={styles.submain}>
          <div className="container-fluid  d-flex justify-content-center align-items-center flex-column ">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-md-12">
                <div className={styles.aboutheading}>
                  <div className={styles.subheading}>
                    <div className={styles.headicon}>
                      <img src={HeadIcon} alt="" />
                    </div>
                    <h1>About Company</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center  ">
              <div className="col-md-6 p-0 d-flex justify-content-center align-items-center">
                <div className={styles.aboutimg}>
                  <img src={AboutImg} alt="" />
                </div>
              </div>

              <div className="col-md-6">
                <div className={styles.abouttxt}>
                  <p>
                    Mr. Pool Tech was established in 1990 by Mr. Tallat Mehmood.
                    We are a familyowned business and pride ourselves inour
                    excellent pool services withunbeatable prices.
                  </p>

                  <p>
                    We are one of Pakistan's reliable specialist swimming pool
                    services,equipment & accessories suppliers. Wedeal with
                    pool/Jacuzzi/sauna/spa equipment and supplies
                  </p>

                  <h1>
                    {" "}
                    <img src={HeadIcon} alt="" /> Introduction
                  </h1>
                  <p>
                    We are specialist in providing Services & equipment for
                    competition size pools (50and 25 meters) be it in leisure
                    centres /clubs / sports centers / schools / hotels /large
                    apartments.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-5 d-flex justify-content-center align-items-center  ">
              <div className="col-md-7 p-0  d-flex justify-content-center align-items-center ">
                <div className={styles.mission}>
                  <div className={styles.missionchild}>
                    <div className={styles.missionsub}>
                      <div className={styles.missionicon}>
                        <img src={HeadIcon} alt="" />
                      </div>
                      <h1>Our Vision And Mission</h1>{" "}
                    </div>
                  </div>

                  <p>
                    At our core, we are committed to delivering exceptional
                    products and services at unmatched prices. Our dedication
                    goes beyond business – we prioritize ethical practices and
                    strive to exceed expectations in every aspect of our work.
                    We specialize in providing comprehensive solutions for
                    swimming pools, including filtration systems, heaters,
                    pumps, ladders, lighting, fittings, skimmers, mosaics,
                    Jacuzzis, saunas, and pool accessories. Whether you're
                    looking for complete installation or refurbishment of an
                    existing pool, our expert team ensures quality and precision
                    every step of the way.
                  </p>
                </div>
              </div>

              <div className="col-md-4 p-0">
                <div className={styles.missionimg}>
                  <img src={MissionImg} alt="" />
                </div>
              </div>
            </div>

            <div className="row  w-100 d-flex justify-content-center align-items-center ">
              <div className="col-md-12 d-flex justify-content-center align-items-center ">
                <div className={styles.provide}>
                  <div className={styles.provideheading}>
                    <div className={styles.providechild}>
                      <div className={styles.provideImg}>
                        <img src={Check} alt="" />
                      </div>

                      <h1>What We Do?</h1>
                    </div>

                    <p>
                      Mr. Pool Tech is one of the largest supplier & wholesalers
                      of pool equipments, steam equipments & sauna equipment in
                      Pakistan. Mr. Pool Tech is providing services in Lahore,
                      Faisalabad, Multan, Islamabad, Rawalpindi & whole of
                      Pakistan. We provide equipment for pools / Jacuzzi / steam
                      / saunas / spas
                    </p>

                    <p>
                      We are providing pool & Jacuzzi cleaning and maintenance
                      services. We offer our after care services either daily,
                      weekly, fortnightly, monthly to keep your pool/Jacuzzi
                      sparkly clean. We offer pool/Jacuzzi opening
                      (spring/summer), winterization services.
                    </p>
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

export default AboutUs;
